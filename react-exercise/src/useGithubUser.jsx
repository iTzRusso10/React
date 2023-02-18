import { useState, useEffect } from "react";

export function useGithubUser({username}){
    const [user, setUser] = useState('');

    useEffect(() => {
        async function fetchUser(){
            const {id, name, avatar_url, bio} = await (await fetch(`https://api.github.com/users/${username}`)).json();
            setUser({id, name, bio, avatar_url})
        }
        fetchUser();
    }, [username])

    return {
        id : user.id,
        name: user.name,
        bio: user.bio,
        pictureProfile : user.avatar_url
    }
}