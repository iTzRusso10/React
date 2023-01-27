import React from 'react';
import ReactDOM from 'react-dom/client';

function getName(name){
  return <h1>Hello, {name}</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(getName("Giuseppe! 🟢"), document.getElementById(`root`))
export default getName;