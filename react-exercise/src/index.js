import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'))

const login = () => {
    alert("Sei loggato")
}


root.render(<Login onLogin={login}/>)