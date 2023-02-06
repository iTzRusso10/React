import { Component } from "react";

class Login extends Component {
    state = {
        username : "",
        password : "",
        remember : false
    }
    
    trackEvent = (event) => {
       const name = event.target.name;
       const type = event.target.type;
       const value = event.target.value;
       const checked = event.target.checked;

       this.setState({
        [name]: type === "checkbox" ? checked : value
       })
    }


    componentDidUpdate(){
        console.log(this.state)
    }


    render(){
        return(
            <div>
                <input name="username" value={this.state.username} onChange={this.trackEvent}/>
                <input name="password" value={this.state.password} type="password" onChange={this.trackEvent}/>
                <input name="remember" value={this.state.remember} type="checkbox" onChange={this.trackEvent}/>
            </div>
        )
    }
}

export default Login