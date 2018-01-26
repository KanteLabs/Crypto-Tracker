import React, { Component } from 'react';
import firebase from '../config/firebase';
import LoginForm from './LoginFrom';

class Login extends Component {
    

    render(){
        return(
            <section id="login">
                <LoginForm />
            </section>
        )
    }
}

export default Login;