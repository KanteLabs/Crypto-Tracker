import React, { Component } from 'react';
import Coin from './Coin';
import firebase from '../config/firebase';
var db = firebase.firestore();

class TrackedCoins extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { coinData } = this.props;
        return(
            <div id="tracked-coins">
                {Object.keys(coinData).map((coin, i)=>{
                    console.log(coin, coinData[coin]) 
                    return(
                        <ul key={i} id={`coin-list ${coin}`}>
                            {Object.values(coinData[coin]).map((item, x)=>{
                                return <Coin coin={item} key={x} x={x} />
                            })}
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default TrackedCoins;