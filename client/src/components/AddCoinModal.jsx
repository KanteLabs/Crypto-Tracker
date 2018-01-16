import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AddCoinModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.modalOpen
        }
    }

    shouldComponentUpdate(prev, next){
        console.log(prev, next)
        if(prev.modalOpen){
            return true;
        }else{
            return false;
        }
    }
    componentWillReceiveProps(prev, next){
        console.log(prev, next)
        if(prev.modalOpen){
            this.setState({open: true})
            return true;
        }else{
            return false;
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