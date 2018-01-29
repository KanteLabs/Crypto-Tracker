import React from 'react';

const Coin = (props) => {
    const {coin, x, coinApiData, dataLoaded} = props;
    function renderPage(){
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
    return(
        Object.keys(coinApiData).length >= 1 ? renderPage() : null
    )
}

export default Coin;