const axios = require('axios');
var api = {}

api.getByCoin = (options, callback) => {
    let coin = options.coin;
    let currency = options.currency;
    let url = `https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${currency}`;

    request.get(url, (err, res, body)=>{
       let data = JSON.parse(body);
       
    })

    return callback(data, coin, currency)
}

module.exports = api;