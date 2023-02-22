import useCounter from "./useCounter"

const Counter = () => {
    const {count, increment, decrement, reset} = useCounter();

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Incrementa</button>
            <button onClick={decrement}>Decrementa</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Counter;