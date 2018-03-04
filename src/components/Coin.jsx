import React, { Component } from 'react';
import axios from 'axios';

class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    grabCoinData = (coin) => {
        let url = `https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=USD`;
        let coinApiData = {}

        axios.get(url).then((res)=>{
            var name = res.data[0].name;
            coinApiData[name] = res.data[0]
            this.setState({
                coinApiData: coinApiData
            })
        }).then(()=>{
            this.setState({
                coinDataLoaded: true
            })
            setTimeout(this.grabCoinData, 300000);
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        const {coin, x, coinApiData, dataLoaded} = this.props;
        this.grabCoinData(coin)
        return(
            <li className="coin" key={x}>
                <div className="top-text">
                    <p className="name">{coin.coin.textKey} ({coin.coin.valueKey})</p>
                    <p className="price-change" style={{color: coinApiData[coin.coin.textKey].percent_change_1h > 0 ? 'green' : 'red'}}>{coinApiData[coin.coin.textKey].percent_change_1h}%</p>
                </div>
                <div className="bottom-text">
                    <p className="amount">{coin.amount} {coin.coin.valueKey} (${Number(coin.amount) * Number(coinApiData[coin.coin.textKey].price_usd)})</p>
                    <p className="price">${ Number(coinApiData[coin.coin.textKey].price_usd)} &nbsp;
                        <span className="price" style={{color: Number(coinApiData[coin.coin.textKey].price_usd) > Number(coin.price) ? 'green' : 'red'}}>
                            {((Number(coinApiData[coin.coin.textKey].price_usd) / Number(coin.price)) * 100).toFixed(2) }%
                        </span>
                    </p>
                </div>
            </li>
        )
    }
}

export default Coin;