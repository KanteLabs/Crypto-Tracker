import React from 'react';

const Coin = (props) => {
    const {coin, x} = props;
    return(
        <li className="coin" id={coin.coin} key={x}>
            {coin.amount}
        </li>
    )
}

export default Coin;