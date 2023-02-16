import { useState } from "react"

export function ClickCounter(){
    const [count, setCount] = useState(0)

    const increment = ()  => {
        setCount((c) => c + 1)
    }

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Incrementa!</button>
        </div>
    )
}