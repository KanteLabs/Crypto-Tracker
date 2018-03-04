import React, { Component } from 'react';
import axios from 'axios';
import Coin from './Coin';
import firebase from '../config/firebase';

var coinApiData = {}
class TrackedCoins extends Component {
    constructor(props){
        super(props);
        this.state = {
            coinDataLoaded: false,
            coinApiData: false
        }
    }
    
    shouldComponentUpdate(prev, next){
        if(Object.keys(next).length === 0){
            return false;
        }else if(next.coinDataLoaded === this.state.coinDataLoaded){
            return false
        }else{
            return true;
        }
    }

    render(){
        const { coinData } = this.props;
        return(
            <div id="tracked-coins">
                {Object.keys(coinData).map((coin, i)=>{
                    return(
                        <ul key={i} id={`coin-list ${coin}`}>
                            {Object.values(coinData[coin]).map((item, x)=>{
                                return <Coin coin={item} key={x} x={x} coinApiData={this.state.coinApiData} />
                            })}
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default TrackedCoins;