import { useState } from "react"

const Counter = ({initialValue = 0}) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount((c) => c + 1)
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Incrementa</button>
        </div>
    )
}

export default Counter;