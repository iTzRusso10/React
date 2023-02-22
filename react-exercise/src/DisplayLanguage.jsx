import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export const DisplayLanguage = () => {

    const Strings = {
        en : {
            HELLO_STRING: "Hello, World!"
        },
        it:{
            HELLO_STRING: "Ciao, mondo!"
        }
    }

    const language = useContext(LanguageContext)
    return(
        <div>
            <h1>Current language: {Strings[language].HELLO_STRING}</h1>
        </div>
    )
}

