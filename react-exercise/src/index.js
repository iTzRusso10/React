import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Counter initialValue = {0} interval={1000} incrementValue = {1} />, root)