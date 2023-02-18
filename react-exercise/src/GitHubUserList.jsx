import { GithubUser } from "./GithubUser";
import { useState } from "react";

export function GitHubUserList() {
    const [username, setUsername] = useState([]);

    const addUser = () => {
        const input = document.querySelector('input')
        setUsername([...username, input.value]);
        input.value = '';
    }
    return(
        <div>
            <input type="text"/>
            <button onClick={addUser}>Cerca</button>
            {username.map((username) => <GithubUser usernames={username} key={username}/>)}
        </div>
    )
}