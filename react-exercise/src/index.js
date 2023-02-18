import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitHubUserList } from './GitHubUserList';
import { GithubUser } from './GithubUser';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<div>
    <GitHubUserList/>
    <GithubUser/>
    </div>
    )