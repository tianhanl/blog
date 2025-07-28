import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { marked } from 'marked';
import moment from 'moment';
import API from '../api';
import { useBlog } from '../context/BlogContext';
import Loading from './Loading';
import 'prismjs';
import './ArticleView.css';

function ArticleView() {
  const { id } = useParams();
  const { state, dispatch, getPreviousArticleID, getNextArticleID } = useBlog();
  const { articleList, articles } = state;
  
  const [articleTitle, setArticleTitle] = useState('N/A');
  const [articleTime, setArticleTime] = useState('N/A');
  const [articleContent, setArticleContent] = useState('N/A');
  const [received, setReceived] = useState(false);

  useEffect(() => {
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && window.Prism && window.Prism.languages[lang]) {
          return window.Prism.highlight(code, window.Prism.languages[lang], lang);
        }
        return code;
      }
    });
  }, []);

  useEffect(() => {
    requestArticle(parseInt(id));
  }, [id, articles]);

  useEffect(() => {
    if (received) {
      setTimeout(() => {
        if (window.Prism) {
          window.Prism.highlightAll();
        }
      }, 100);
    }
  }, [received, articleContent]);

  const requestArticle = async (articleId) => {
    const cachedArticle = articles.find(element => element.number === articleId);
    
    if (cachedArticle) {
      setArticleTitle(cachedArticle.title);
      document.title = cachedArticle.title;
      setArticleTime(moment(cachedArticle.created_at, moment.ISO_8601).format('MMM DD, YYYY'));
      setArticleContent(cachedArticle.body);
      setReceived(true);
    } else {
      setReceived(false);
      try {
        const response = await API.getArticle(articleId);
        const data = response.data;
        setArticleTitle(data.title);
        document.title = data.title;
        setArticleTime(moment(data.created_at, moment.ISO_8601).format('MMM DD, YYYY'));
        setArticleContent(data.body);
        setReceived(true);
        dispatch({
          type: 'ADD_ARTICLE',
          payload: { articleData: data }
        });
      } catch (error) {
        setArticleTitle('Oh, there is an error');
        setArticleTime('N/A');
        setArticleContent('N/A');
        setReceived(true);
      }
    }

    const position = articleList.findIndex(element => element.number === articleId);
    dispatch({
      type: 'CHANGE_CURR_POSITION',
      payload: { currPosition: position }
    });
  };

  const previousID = getPreviousArticleID();
  const nextID = getNextArticleID();
  const previousDisable = previousID < 0;
  const nextDisable = nextID < 0;
  const targetPreviousID = previousID < 0 ? id : previousID;
  const targetNextID = nextID < 0 ? id : nextID;

  return (
    <div>
      <CSSTransition
        in={received}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <div className="article-view">
          <h2 className="article-view-title">{articleTitle}</h2>
          <p className="article-view-meta">Created {articleTime}</p>
          <div 
            className="article-view-content"
            dangerouslySetInnerHTML={{ __html: marked(articleContent || '') }}
          />
          <nav className="article-view-control">
            <Link 
              id="prev" 
              className={previousDisable ? 'disabled' : ''}
              to={`/article/${targetPreviousID}`}
            >
              Prev
            </Link>
            <Link 
              id="next" 
              className={nextDisable ? 'disabled' : ''}
              to={`/article/${targetNextID}`}
            >
              Next
            </Link>
          </nav>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={!received}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <Loading />
      </CSSTransition>
    </div>
  );
}

export default ArticleView;
