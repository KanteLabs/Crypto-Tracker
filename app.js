var api = {}

api.getByCoin = (options, callback) => {
    let coin = options.coin;
    let currency = options.currency;

    return callback("success", coin, currency)
}

module.exports = api;