import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class AddCoinModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleOpen = () => {
    this.setState({open: true});
    };

    handleClose = () => {
    this.setState({open: false});
    };
    
    render() {
    const actions = [
        <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
        />,
        <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
        />,
    ];

    return (
        <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
        >
            Only actions can close this dialog.
        </Dialog>
        </div>
    );
    }
}

export default AddCoinModal;