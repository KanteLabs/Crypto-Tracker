import React, { Component } from 'react';
import firebase from '../config/firebase';
import AddCoinModal from './AddCoinModal';
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

    render(){
        const {redirect, page} = this.state;
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
            <section id="portfolio">
                {redirect ? <Redirect to={page} />: null}
                <div className="page-cointainer">
                    <Paper style={paper} zDepth={3} id="add-coin">
                        <i className="material-icons">add_circle</i><p> Add A Coin</p>
                    </Paper>
                    <AddCoinModal />
                </div>
                {/* {this.renderPage()} */}
            </section>
        )
    }
}

export default Portfolio;