import React, { Component } from 'react';
import CurrentMarketValues from './CurrentMarketValues';

class Home extends Component{
    render(){
        return(
            <section className="home">
                <CurrentMarketValues />
            </section>
        )
    }
}

export default Home;