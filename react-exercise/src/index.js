import React from 'react';
import ReactDOM from 'react-dom/client';
import FilteredList from './FilteredList';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<FilteredList list={[{name: "Giuseppe", age: 18}, {name: "Mario", age: 13}, {name: "Giovanni", age: 18}, {name: "Marghe", age: 12}]}/>)