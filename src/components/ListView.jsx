import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import anime from 'animejs';
import moment from 'moment';
import API from '../api';
import { useBlogStore } from '../store/useBlogStore';
import Loading from './Loading';
import './ListView.css';

function ListView() {
  const articleList = useBlogStore(s => s.articleList);
  const accessTime = useBlogStore(s => s.accessTime);
  const labels = useBlogStore(s => s.labels);
  const setArticleList = useBlogStore(s => s.setArticleList);
  const setLabels = useBlogStore(s => s.setLabels);
  const listRef = useRef();

  useEffect(() => {
    getArticles();
    getLabels();
  }, []);

  useEffect(() => {
    if (articleList.length > 0) {
      anime({
        targets: '.list-view-item',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        delay: (target, index) => index * 300,
        easing: 'easeOutExpo'
      });
    }
  }, [articleList]);

  const getLabels = async () => {
    try {
      const response = await API.getLabels();
      const labelList = response.data.map(element => ({
        name: element.name,
        color: element.color
      }));
      setLabels({ labels: labelList });
    } catch (error) {
      console.log(error);
    }
  };

  const getArticles = async () => {
    if (accessTime) return;
    
    const today = new Date().getDate();
    try {
      const response = await API.getArticleList();
      const list = response.data.map(element => ({
        number: element.number,
        id: element.id,
        title: element.title,
        articleTime: moment(element.created_at).format('MMM YYYY')
      }));
      setArticleList({ articleList: list, accessTime: today });
    } catch (error) {
      console.log(error);
    }
  };

  if (!articleList.length && !accessTime) {
    return <Loading />;
  }

  return (
    <div className="list-view">
      <TransitionGroup component="ul" className="list-view-label-container">
        {labels.map(label => (
          <CSSTransition key={label.name} classNames="slide" timeout={500}>
            <li 
              className="list-view-label-item"
              style={{ backgroundColor: `#${label.color}` }}
            >
              <span>{label.name}</span>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <ul ref={listRef}>
        {articleList.map((article, index) => (
          <li key={article.id} className="list-view-item" data-index={index}>
            <p className="list-view-item-time">{article.articleTime}</p>
            <h3>
              <Link to={`/article/${article.number}`}>{article.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
