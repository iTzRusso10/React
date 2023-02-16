import { useState } from "react"

export function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const usernameChange = (event) => {
        setUsername(event.target.value)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const rememberChange = (event) => {
        setCheckbox(event.target.checked)
    }

    console.log(username,password,checkbox)

    return (
        <form>
            <input name="username" onChange={usernameChange} value={username} />
            <input name="password" onChange={passwordChange} type="password" value={password}/>
            <input name="remeber" onChange={rememberChange} type="checkbox" value={checkbox}/>
        </form>
    )
}