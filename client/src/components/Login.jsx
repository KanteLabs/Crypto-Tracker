import React, { Component } from 'react';
import firebase from '../config/firebase';
import ui from '../config/firebaseui';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleChange = (e) => {
        e.preventDefault();
    }

    handleLoginSubmit=(e)=>{
        e.preventDefault();
        console.log('Login Submit')
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res=>{
            firebase.auth().onAuthStateChanged((user)=>{
                if (user) {
                    this.setState({userInfo: user.toJSON()})
                    this.props.authState()
                } else {
                    console.log('User is not logged in')
                    this.props.authState()
                }
            })
        })
        .catch(err=>{
            // Handle Errors here.
            var errorCode = err.code;
            var errorMessage = err.message;
            console.log(errorCode, errorMessage)
            var loginError = document.getElementById("login-error");
            loginError.innerHTML = (`<div class="ui message"> <div class="header">We had some issues</div><ul class="list"><li>${errorMessage}</li></ul></div>`)
        });
    }

    handleRegisterSubmit=(e)=>{
        e.preventDefault();
        console.log('Register Submit')
        if(this.state.password === this.state.password_confirm){
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(res=>{
                let user = firebase.auth().currentUser;
                user.sendEmailVerification();
            })
            .then(()=>{
                db.collection('users').doc(firebase.auth().currentUser.uid).set({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    display_name: this.state.display_name,
                    email: this.state.email,
                    creation_time: new Date()
                },{ merge: true })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
                this.setState({
                    redirect: true,
                    currentPage: '/'
                })
            })
            .catch(err=>{
                // Handle Errors here.
                var errorCode = err.code;
                var errorMessage = err.message;
                console.log(errorCode, errorMessage)
                var formError = document.getElementById("form-error");
                formError.innerHTML = (`<div class="ui message"> <div class="header">We had some issues</div><ul class="list"><li>${errorMessage}</li></ul></div>`)
            });
        }else{
            var formError = document.getElementById("form-error");
            formError.innerHTML = ('<div class="ui message"> <div class="header">We had some issues</div><ul class="list"><li>Passwords must match</li></ul></div>')
        }
    }

    render(){
        return(
            <section id="login">
                <LoginForm />
                <RegisterForm />
            </section>
        )
    }
}

export default Login;