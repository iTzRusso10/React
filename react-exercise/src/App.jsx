import React from "react";
import Container from "./Container";

class App extends React.Component {
    render() {
        return (
            <Container title={<h1>Il mio bellissimo container</h1>}>
                <p>Ciao</p>
            </Container>
        );
    }
}

export default App;