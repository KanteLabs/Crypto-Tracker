var api = require('./app')

let options = {
    coin: 'BITCOIN',
    currency: 'USD'
}

api.getByCoin(options, (req, res, err)=>{
    console.log(req, res, err)
})