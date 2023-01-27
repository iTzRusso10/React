import React from 'react';
import ReactDOM from 'react-dom/client';

const sum = (a,b) => {
  return<h2>The sum is {a + b}</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(sum(12,22), root)