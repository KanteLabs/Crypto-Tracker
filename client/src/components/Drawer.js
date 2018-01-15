import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    componentWillReceiveProps(prev, next){
        console.log(prev, next)
    }
}

export default Drawer;