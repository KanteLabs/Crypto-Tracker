import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.openState
        }
    }

    shouldComponentUpdate(prev, next){
        if(prev.openState){
            return true;
        }else{
            return true;
        }
    }

    componentWillReceiveProps(prev, next){
        if(prev.openState){
            this.setState({open: true})
            return true;
        }else{
            this.setState({open: false})
            return false;
        }
    }

    handleRequestChange=(open)=>{
        this.setState({
            open: true
        })
        this.props.changeDrawerStatus(false)
    }

    render(){
        return(
            <Drawer
                open={this.state.open} 
                docked={false}
                onRequestChange={(open) => this.handleRequestChange({open})}
            >
                 <Link to="/"><MenuItem>Home</MenuItem></Link>
                {this.props.authState ? <Link to="/portfolio"><MenuItem>Portfolio</MenuItem></Link> :<Link to="/login"><MenuItem>Login</MenuItem></Link>}
                {this.props.authState ? <Link to="/ether-balance"><MenuItem>ETH Balance</MenuItem></Link> : null}
            </Drawer>
        )
    }

}

export default SideMenu;