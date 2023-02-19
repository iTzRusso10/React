import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function HookGithub(){

   const [username,setUsername] = useState('')
    const {id, name, pictureProfile, bio, loading, error} = useGithubUser(username)

    const search = () => {
        const input = document.querySelector('input');
        setUsername(input.value)
        input.value = '';
    }
    
    return(
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Utente {username} non trovato, riprova</h2>}
            <input type="text"></input>
            <button onClick={search}>Cerca</button>
            <img src={pictureProfile} alt="ProfilePhoto"/>
            <p>Id : {id}</p>
            <p>Name : {name}</p> 
            <p>Bio : {bio}</p>
        </div>
    )
}