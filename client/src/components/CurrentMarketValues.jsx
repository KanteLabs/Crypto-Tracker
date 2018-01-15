import React, { Component } from 'react';

class CurrentMarketValues extends Component{

    componentDidMount() {
        let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=5';

        fetch(url).then((res)=>(
            console.log(res.json())
        )).catch((err)=>(
            console.log(err)
        ))
    }
    
    render(){
        return(
            <h1>Hi</h1>
        )
    }
}

export default CurrentMarketValues;