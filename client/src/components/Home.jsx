import React, { Component } from 'react';
import CurrentMarketValues from './CurrentMarketValues';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            topFiveCoins: false,
            topFiveCoinsLoaded: false
        }
        this.grabTopFiveCoins = this.grabTopFiveCoins.bind(this)
    }

    componentDidMount() {
        !this.state.topFiveCoins ? this.grabTopFiveCoins() : null
    }

    shouldComponentUpdate(prev, next){
        if(next.topFiveCoins == this.state.topFiveCoins){
            console.log("no update");
            return false;
        }else{
            console.log("update")
            return true;
        }
    }

    grabTopFiveCoins(){
        let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=5';
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                console.log(data)
                this.setState({
                    topFiveCoins: data,
                    topFiveCoinsLoaded: true
                })
                return data;
            }).then(()=>{
                // setTimeout(this.grabTopFiveCoins, 10000);
            })
            .catch(err=>console.log(err))
            return res;
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        const {topFiveCoinsLoaded} = this.state;
        return(
            <section className="home">
                {topFiveCoinsLoaded ? <CurrentMarketValues data={this.state.topFiveCoins}/> : null}
            </section>
        )
    }
}

export default Home;