import React from 'react';
import ReactDOM from 'react-dom/client';

import { Welcome } from './Welcome';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Welcome name="Giuseppe" age={20}/>);