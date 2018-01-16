import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Redirect } from 'react-router-dom';

var db = firebase.firestore();

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            userUID: false,
            redirect: false,
            page: ''
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    userID: user.uid
                })
            }else{
                this.setState({
                    redirect: true,
                    page:'/login'
                })
            }
        })
    }
    
    render(){
        const {redirect, page} = this.state;
        return(
            <section id="portfolio">
                {redirect ? <Redirect to={page} />: null}
            </section>
        )
    }
}

export default Portfolio;