import { useCallback, useState } from "react"

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const onIncrement = useCallback(() => {
        setCount((c) => c + 1)
    }, [])

    const onDecrement = useCallback(() => {
        setCount((c) => c - 1)
    }, [])

    const onReset = useCallback(() => {
        setCount(initialValue)
    }, [initialValue])

    return {
            count: count,
            increment: onIncrement,
            decrement: onDecrement,
            reset: onReset
        }
}

export default useCounter;