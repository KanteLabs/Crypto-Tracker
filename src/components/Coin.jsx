import React from 'react';

const Coin = (props) => {
    const {coin, x} = props;
    return(
        <li className="coin" id={coin.coin} x={x}>
        </li>
    )
}

export default Coin;