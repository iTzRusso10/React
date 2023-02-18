import { useState } from "react";

export function useCounter () {
    const [count, setCount] = useState(0)

    const onIncrement = () => {
        setCount((c) => c + 1);
    }

    const onDecrement = () => {
        setCount((c) => c - 1);
    }

    const onReset = () => {
        setCount(0)
    }

    return {
        count : count,
        increment : onIncrement,
        decrement : onDecrement,
        reset : onReset
    }
}