var api = require('./api')

let options = {
    coin: 'bitcoin',
    currency: 'USD'
}

api.getByCoin(options, (req, res, err)=>{
    if(err){
        console.log(err.data, err.status, err.statusText)
    }else{
        console.log(req, res)
    }
})