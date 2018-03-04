import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="menu-links">
                <Link to="/">Home</Link>
                {this.props.authState ? <Link to="/portfolio">Portfolio</Link> :<Link to="/login">Login</Link>}
                {this.props.authState ? <Link to="/ether-balance">ETH Balance</Link> : null}
            </div>
        )
    }
}

export default BottomMenu;