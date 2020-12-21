import React, { Component } from "react";
import './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: "",
            password: "",
            error: ""
         };
    }
    
    handlerSubmit= (e) =>{
        e.preventDefault();
       this.setState({error:''})
   const password = this.state.password
   const email = this.state.email
   if(!email || email ==""){
       return this.setState({error:'please enter email id'})
   }
   
   if(!password || password ==""){
       return this.setState({error:'please enter password'})
   }
 
   if(password.length <= 7 || password.length >= 26){
       console.log(password.length)
    return this.setState({error:'please enter password between 8 to 25 charecters only'})
}

if(this.state.error !== ""){

}

}
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>

                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    name='email'
                    value={this.state.email} 
                    onChange={(event)=>this.setState({ email: event.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    name='password'
                    value={this.state.password}
                    onChange={(event)=>this.setState({ password: event.target.value})} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div style={{color:'red'}}>{this.state.error && this.state.error}</div>
    <br></br>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}