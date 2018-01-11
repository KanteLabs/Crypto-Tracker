var api = require('./app')

let options = {
    coin: 'bitcoidn',
    currency: 'USD'
}

api.getByCoin(options, (req, res, err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(req, res)
    }
})