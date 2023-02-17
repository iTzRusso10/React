
import { useState, useEffect } from "react";

export function ClickCounter(){
    const [counter, setCounter] = useState(0)

   const incrementCounter = () => {
    setCounter((c) => c +1)
   }

   const onCounterChange = (count) => {
    console.log(`Il valore corrente è ${count}`)
   }
   useEffect(() => {
    onCounterChange(counter)
   }, [counter])


    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={incrementCounter}>Incrementa</button>
        </div>
    )
}