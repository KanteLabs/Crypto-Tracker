import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import coins from '../config/coins';

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

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {

    }   
    
    handleChange = () => {

    }
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
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={true}
                open={this.state.open}
            >
                <AutoComplete
                    floatingLabelText="Search for A coin"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={coins}
                    maxSearchResults={5}
                />
            </Dialog>
        )
    }
}

export default AddCoinModal;