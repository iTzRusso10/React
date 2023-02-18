
import { useState, useEffect } from "react";

export function ClickCounter(){
    const [counter, setCounter] = useState(0)

    const onChangeCounter = (count) => {
        console.log(`Il contatore è ${count}`)
    }

    useEffect(() => {
        const interval= setInterval(() => {
                setCounter((c) => c + 1)
        }, 1000);
    return () => 
        clearInterval(interval);
      },[]);


        useEffect(() => {
            return () => {
                console.log(`Il counter era ${counter}`)
            }
        }, )
      
        useEffect(() => {
            onChangeCounter(counter)
        })

    return(
        <div>
            <h2>Counter: {counter}</h2>
        </div>
    )
}