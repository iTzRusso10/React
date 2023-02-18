import { useFormControlled } from "./useForm";

export function Form(){
    const {username, password, search, defaultV} = useFormControlled('');
    
    return (
        <>
            <form onChange={defaultV}>
            <input type="text" onChange={username}/>
            <input type="password" onChange={password}/>
            <button onClick={search}>Crea Oggetto</button>
            </form>
        </>
    )
        
}