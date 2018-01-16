import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Redirect } from 'react-router-dom';
import {Paper} from 'material-ui';

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
    renderPage(){
        const paper = {
            padding: '1em',
            width: '90vw',
            margin: 20,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          };
        return(
            <Paper style={paper} zDepth={3}>
                <i className="material-icons">add_circle</i><p>Add A Coin</p>
            </Paper>
        )
    }
    render(){
        const {redirect, page} = this.state;
        return(
            <section id="portfolio">
                {redirect ? <Redirect to={page} />: null}
                {this.renderPage()}
            </section>
        )
    }
}

export default Portfolio;