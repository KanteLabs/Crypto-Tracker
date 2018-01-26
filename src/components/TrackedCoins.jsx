import React, { Component } from 'react';
import firebase from '../config/firebase';
var db = firebase.firestore();

class TrackedCoins extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let userid = this.props.userid;
        console.log(userid)
        // db.collection()
        console.log(this.props)
    }

    render(){
        return(
            <div id="tracked-coins">
                <h1>hi {this.props.userid}</h1>
            </div>
        )
    }
}

export default TrackedCoins;