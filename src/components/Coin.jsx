import React from 'react';

const Coin = (props) => {
    const {coin, x} = props;
    return(
        <li className="coin" id={coin.coin} key={x}>
            <div className="top-text">
                <p className="name">{coin.coin.textKey} ({coin.coin.valueKey})</p>
                {/* <p className="price-change" style={{color: coin.percent_change_1h > 0 ? 'green' : 'red'}}>{coin.percent_change_1h}%</p> */}
            </div>
            <div className="bottom-text">
                {/* <p className="price-btc">Price BTC: {coin.price_btc}</p> */}
                {/* <p className="price">USD: ${coin.price_usd}</p> */}
            </div>
        </li>
    )
}

export default Coin;