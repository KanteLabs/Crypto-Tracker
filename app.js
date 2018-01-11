const axios = require("axios");
var api = {};

api.getByCoin = (options, callback) => {
    let coin = options.coin;
    let currency = options.currency;
    let url = `https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${currency}`;

    axios.get(url).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    return callback(data, coin, currency)
}

module.exports = api;