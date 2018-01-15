import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.openState
        }
    }

    shouldComponentUpdate(prev, next){
        console.log(prev, next)
        if(prev.openState){
            return true;
        }else{
            return true;
        }
    }

    componentWillReceiveProps(prev, next){
        console.log(prev, next)
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
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
        )
    }

}

export default SideMenu;