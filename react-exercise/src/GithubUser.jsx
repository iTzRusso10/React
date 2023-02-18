import { useEffect, useState } from "react"

export function GithubUser(){
    const username  = `Mcsdcs`;
    const [user, setUser] = useState(username)


useEffect(() =>  {
    async function fetchUser(){
    const {id, login, name, avatar_url,bio, message} = await (await fetch(`https://api.github.com/users/${username}`)).json();
    setUser({name, id, login, avatar_url, bio, message})
}
fetchUser()
},[username])

  if(username === undefined){
    console.error(`Non trovato`)
  }
    return(
        <div>
            <img src={user.avatar_url} alt="Ciao"></img>
            <h2>{user.name}</h2>
            <p>Id : {user.id}</p>
            <p>Login : {user.login}</p>
            <p>Bio: {user.bio}</p>
            <p>{user.message}</p>
        </div>
    )
}