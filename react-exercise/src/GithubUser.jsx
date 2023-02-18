import { useEffect, useState } from "react"
import './index.css'

export function GithubUser({usernames = 'iTzRusso10'}){
    const [user, setUser] = useState('');

    useEffect(() =>  {
        async function fetchUser(){
        const {id, login, name, avatar_url,bio} = await (await fetch(`https://api.github.com/users/${usernames}`)).json();
        setUser({name, id, login, avatar_url, bio});
    }
    fetchUser()
    },[usernames])

    
    return(
        <div>
            <img src={user.avatar_url} alt="Ciao" style={{width : '200px'}}></img>
            <h2>{user.name}</h2>
            <p>Id : {user.id}</p>
            <p>Login : {user.login}</p>
            <p>Bio: {user.bio}</p>
            <p>{user.message}</p>
        </div>
    )
}