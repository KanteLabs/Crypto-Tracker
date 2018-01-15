import React from 'react';

const CurrentMarketValues = (props) => {
    const {data} = props;
    return(
        <div id="current-market">
            <ul>
                {data.map((coin, i)=>{
                    return(
                        <li key={i}>
                            <div className="top-text">
                                <p className="name">Rank: {coin.rank} - {coin.name}({coin.symbol})</p>
                                <p className="price-change">1hr Price Change: {coin.percent_change_1h}%</p>
                            </div>
                            <div className="bottom-text">
                                <p className="market-cap">Market Cap USD: ${coin.market_cap_usd}</p>
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