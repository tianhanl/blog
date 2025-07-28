import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Loading;
