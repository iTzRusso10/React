import { Component , createRef} from "react";

class UncontrollatedLogin extends Component{
    usernameRef = createRef();
    passwordRef = createRef();
    checkboxRef = createRef();
    submitRef = createRef();

    check = {
        username: "",
        password: "",
        checkbox: false
    }

    componentDidMount = () => {
        const checkingClosure = () => {
            (this.passwordRef.current.value.length > 0 && this.usernameRef.current.value.length > 0 ? 
                this.submitRef.current.removeAttribute('disabled') 
                : this.submitRef.current.setAttribute('disabled', true))
        }
        if(this.usernameRef.current && this.passwordRef.current){
            this.usernameRef.current.onchange = () => checkingClosure();
            this.passwordRef.current.onchange = () => checkingClosure();
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }

    reset = () => {
        this.usernameRef.current.value = ""
        this.passwordRef.current.value = ""
        this.checkboxRef.current.checked = false
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="username" ref={this.usernameRef}/>
                <input name="password" type="password" ref={this.passwordRef}/>
                <input name="checkbox" type="checkbox" ref={this.checkboxRef} />
                <button ref={this.submitRef}>Login</button>
                <button onClick={this.reset}>Reset</button>
            </form>
        )
    }
}

export default UncontrollatedLogin;