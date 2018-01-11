const axios = require("axios");
var api = {};

api.getByCoin = (options, callback) => {
    let coin = options.coin;
    let currency = options.currency;
    let url = `https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${currency}`;

    axios.get(url).then((res)=>{
        let data = res.data;
        return callback(data, options, null)
    }).catch((err)=>{
        return callback(null, null, err)
    })
   
}

module.exports = api;