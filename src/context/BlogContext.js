import React, { createContext, useContext, useReducer } from 'react';

const BlogContext = createContext();

const initialState = {
  accessTime: '',
  articleList: [],
  articles: [],
  labels: [],
  currPosition: -1
};

function blogReducer(state, action) {
  switch (action.type) {
    case 'ADD_ARTICLE_LIST':
      return {
        ...state,
        accessTime: action.payload.accessTime,
        articleList: action.payload.articleList
      };
    case 'ADD_ARTICLE':
      return {
        ...state,
        articles: [...state.articles, action.payload.articleData]
      };
    case 'ADD_LABELS':
      return {
        ...state,
        labels: action.payload.labels
      };
    case 'CHANGE_CURR_POSITION':
      return {
        ...state,
        currPosition: action.payload.currPosition
      };
    default:
      return state;
  }
}

export function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  const getPreviousArticleID = () => {
    if (state.currPosition === -1) return -1;
    if (state.articleList.length && state.currPosition - 1 >= 0) {
      return state.articleList[state.currPosition - 1].number;
    }
    return -1;
  };

  const getNextArticleID = () => {
    if (state.currPosition === -1) return -1;
    if (state.articleList.length && state.currPosition + 1 < state.articleList.length) {
      return state.articleList[state.currPosition + 1].number;
    }
    return -1;
  };

  const value = {
    state,
    dispatch,
    getPreviousArticleID,
    getNextArticleID
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
