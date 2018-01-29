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

    grabCoinData = (coin) => {
        let url = `https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=USD`;

        axios.get(url).then((res)=>{
            var name = res.data[0].name;
            coinApiData[name] = res.data[0]
            this.setState({
                coinApiData: coinApiData
            })
        }).then(()=>{
            console.log(this.state.coinApiData)
            setTimeout(this.grabCoinData, 300000);
        }).catch((err)=>{
            console.log(err)
        })
    }


    render(){
        const { coinData } = this.props;
        return(
            <div id="tracked-coins">
                {Object.keys(coinData).map((coin, i)=>{
                    this.grabCoinData(coin)
                    return(
                        <ul key={i} id={`coin-list ${coin}`}>
                            {Object.values(coinData[coin]).map((item, x)=>{
                                return <Coin coin={item} key={x} x={x} coinApiData={this.state.coinApiData}/>
                            })}
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default TrackedCoins;