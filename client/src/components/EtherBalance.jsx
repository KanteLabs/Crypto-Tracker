import React, { Component } from 'react';
import axios from 'axios';
// import etherscanKey from '../config/api-keys';
import firebase from '../config/firebase';
var db = firebase.firestore();

const etherscanKey = require('../config/api-keys')

class EtherBalance extends Component {

    componentWillMount() {
        // axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=0xcf82fdd676ffebf4f5ebe344b06f76110be6942b&tag=latest&apikey=${etherscanKey}`).then((data)=>{
        //     console.log(data, data.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                db.collection('users').doc(user.uid).get().then((res)=>{
                    console.log(res.data())
                })
            }
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