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
          return <div>{Strings[language].HELLO_STRING}</div>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
