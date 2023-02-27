import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const GithubUser = () => {

const [user,setUser] = useState('')
const [load,setLoad] = useState(false)
const {username} = useParams();

useEffect(() => {
    setLoad(true);
    const getUser = async () => {
        const {name,id,login,avatar_url} = await (await fetch(`https://api.github.com/users/${username}`)).json();
        setUser({name,id,login,avatar_url});
        setLoad(false);
    }
    getUser()
    
},[username])
;

    return(
        <div>
            {load && <h1>Caricamento...</h1>}
            <h2>{user.name}</h2>
            <img src={user.avatar_url} alt="ProfileImage" style={{width :"200px"}}></img>
            <p>{user.id}</p>
            <p>{user.login}</p>
        </div>
    )
}

export default GithubUser;