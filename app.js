var api = {}

api.getByCoin = (options, callback) => {
    let coin = options.coin;
    let currency = options.currency;
    let url = `https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${currency}`;

    fetch(url)
    .then((res)=>{
        console.log(res);
        return res;
    })
    .catch((err)=>{
        console.log(err)
    })

    return callback("success", coin, currency)
}

module.exports = api;