import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ListView from './components/ListView';
import ArticleView from './components/ArticleView';
import config from './config';
import './App.css';

function App() {
  const location = useLocation();
  const profileAddress = `https://github.com/${config.username}`;

  return (
    <div id="app">
      <header>
        <h1 className="blog-title">
          <Link to="/">{config.blogTitle}</Link>
        </h1>
        <nav>
          <a href={profileAddress} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </nav>
      </header>
      
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={200}
          appear
        >
          <main className="sticky-main">
            <Routes location={location}>
              <Route path="/" element={<ListView />} />
              <Route path="/article/:id" element={<ArticleView />} />
            </Routes>
          </main>
        </CSSTransition>
      </TransitionGroup>

      <footer>
        Created by
        <a href={profileAddress}>TL</a>
      </footer>
    </div>
  );
}

export default App;
