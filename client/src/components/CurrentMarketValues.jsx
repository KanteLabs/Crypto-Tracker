import React from 'react';

const CurrentMarketValues = (props) => {
    const {data} = props;
    return(
        <div id="current-market">
            <ul>
                {data.map((coin, i)=>{
                    return(
                        <li key={i}>
                            <p className="name">Rank: {coin.rank} - {coin.name}({coin.symbol})</p>
                            <p className="price">USD: ${coin.price_usd}</p>
                            <p className="price-change">1hr Price Change: {coin.percent_change_1h}%</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CurrentMarketValues;