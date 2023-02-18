import { useState } from "react";

export function useFormControlled() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleData = () => {
        console.log({username,password})
    }

    const prevDef = () => {
        document.querySelector("form").addEventListener("click", function(event){
            event.preventDefault()
          });
    }

    return{
        username: handleUsername,
        password : handlePassword,
        search : handleData,
        defaultV : prevDef
    }
}