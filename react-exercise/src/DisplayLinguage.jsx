import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    HELLO_STRING: "Hello, world!",
  },
  it: {
    HELLO_STRING: "Ciao, mondo!",
  },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return <div><h1>{Strings[language].HELLO_STRING}</h1></div>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
