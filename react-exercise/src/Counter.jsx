import { useCounter } from "./useCounter";

export function Counter() {
    const {reset, increment, decrement, count} = useCounter(0)

    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}