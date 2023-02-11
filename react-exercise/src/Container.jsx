import React from 'react';

class Container extends React.Component {
    render() {
        const myStyle = {
            backgroundColor: "white",
            border: "1px solid red",
        }
        return (
            <div style={myStyle} >
                {this.props.title}
                <hr />
                {this.props.children}
            </div>
        ); 
    }
}

export default Container;