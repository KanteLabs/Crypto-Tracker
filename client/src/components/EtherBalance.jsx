import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../config/firebase';
import {FlatButton, TextField} from 'material-ui';

var db = firebase.firestore();
const etherscanKey = require('../config/api-keys')

class EtherBalance extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        // axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=0xcf82fdd676ffebf4f5ebe344b06f76110be6942b&tag=latest&apikey=${etherscanKey}`).then((data)=>{
        //     console.log(data, data.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        // firebase.auth().onAuthStateChanged((user)=>{
        //     if(user){
        //         db.collection('users').doc(user.uid).get().then((res)=>{
        //             console.log(res.data())
        //         })
        //     }
        // })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
    }

    handleChange=(e)=>{
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <section id="ether-balance">
                <div className="balance-form">
                    <form onSubmit={this.handleSubmit} >
                        <TextField
                            hintText="Enter Address to Track"
                            floatingLabelText="ETH Address"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                            name="address"
                            type="text"
                        />
                        <FlatButton
                            label="Submit"
                            primary={true}
                            onClick={this.handleSubmit}
                            type="Submit"
                        />
                    </form>
                </div>
            </section>
        )
    }
}

export default EtherBalance;