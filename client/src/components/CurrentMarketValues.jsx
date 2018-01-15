import React from 'react';

const CurrentMarketValues = (props) => {
    const {data} = props;
    return(
        <div id="current-market">
            <h1 className="page-title">Top 5 Coins</h1>
            <ul>
                {data.map((coin, i)=>{
                    return(
                        <li key={i}>
                            <div className="top-text">
                                <p className="name">{coin.name}({coin.symbol})</p>
                                <p className="price-change">{coin.percent_change_1h}%</p>
                            </div>
                            <div className="bottom-text">
                                <p className="price-btc">Price BTC: {coin.price_btc}</p>
                                <p className="price">USD: ${coin.price_usd}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CurrentMarketValues;