import { useState } from "react"
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext"

export const App = () => {

    const [language, setLanguage] = useState('en');

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
    }

        return(
            <>
            <select value={language} onChange={changeLanguage}>
                <option value='en'>English</option>
                <option value='it'>Italiano</option>
            </select>
        <LanguageContext.Provider value={language}>
            <DisplayLanguage />
        </LanguageContext.Provider>
        </>
    )
}