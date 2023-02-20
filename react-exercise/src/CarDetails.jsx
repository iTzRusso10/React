import { useRef, useState } from "react"

export function CarDetails(){

    const [initial, setInitial] = useState({
        color: '',
        model: '',
        years: ''
    })

    const colorRef = useRef()
    const yaersRef = useRef()
    const modelRef = useRef()


    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const change = () => {
       setInitial({
            color: colorRef.current.value,
            model: modelRef.current.value,
            years: yaersRef.current.value
       })
    }

    const submit = () => {
        console.log(initial)
    }

 
    return (
        <form style={{display : "flex", flexDirection : "column", width: "200px"}} onSubmit={handleSubmit} >
            Colore
            <input ref={colorRef} onChange={change}/>
            Modello
            <input ref={modelRef} onChange={change}/>
            Anno
            <input ref={yaersRef} onChange={change}/>
            <button onClick={submit}>Vai</button>
        </form>
    )
}