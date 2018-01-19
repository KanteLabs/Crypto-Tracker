import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../config/firebase';

var db = firebase.firestore();

class EtherBalance extends Component {

    componentWillMount() {
        axios.get('/etherBalance').then((res)=>{
            console.log(res, res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    render(){
        
        return(
            <section id="ether-balance">
                
            </section>
        )
    }
}

export default EtherBalance;