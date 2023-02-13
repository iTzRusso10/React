import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLinguage";
export class App extends React.Component {
    state = {
        language: "en"
    }


    changeLanguage = (e) => {
        this.setState({
            language: e.target.value
        })
    }

    render() {
        return (
            <>
            <select value={this.state.language} onChange={this.changeLanguage}>
                <option value="en">INGLESE</option>
                <option value="it">ITALIANO</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
            </>
     )   
    }
}

