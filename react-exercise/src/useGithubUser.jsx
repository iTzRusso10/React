import { useState, useEffect } from "react";

export function useGithubUser(username){
    const [user, setUser] = useState('');
    const [err, setError] = useState('');
    const [loading,setLoading] = useState(false)


useEffect(() => {
    const fetchUSer = async (username) => {
        try{
            setLoading(true);
            setError('');
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.status !== 200) {
              throw new Error();
            }
            
            const { id, name, bio, avatar_url } = await response.json();
            setUser({id,name,bio,avatar_url,err,loading});
        }
        catch(error){
            setError(error)
            setUser('')
        }
        finally{
            setLoading(false)
        }
    }
    fetchUSer(username);
},[username])

  

    return {
        id : user.id,
        name: user.name,
        bio: user.bio,
        pictureProfile : user.avatar_url,
        error: err,
        loading: loading
    }
}