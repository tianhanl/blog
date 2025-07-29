import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ListView from './components/ListView';
import ArticleView from './components/ArticleView';
import ScrollToTop from './components/ScrollToTop';
import config from './config';
import './App.css';

function App() {
  const location = useLocation();
  const profileAddress = `https://github.com/${config.username}`;

  return (
    <div id="app">
      <header>
        <nav>
          <h1 className="blog-title">
            <Link to="/">{config.blogTitle}</Link>
          </h1>
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
              <Route path="/" element={
                <>
                  <section className="welcome-section">
                    <h1>👋 Welcome to {config.blogTitle}</h1>
                    <p>Hi, this is TL. I'm documenting my thoughts and learnings in this blog.</p>
                  </section>
                  <ListView />
                </>
              } />
              <Route path="/article/:id" element={<ArticleView />} />
            </Routes>
          </main>
        </CSSTransition>
      </TransitionGroup>

      <footer>
        Created by <a href={profileAddress}>TL</a>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
