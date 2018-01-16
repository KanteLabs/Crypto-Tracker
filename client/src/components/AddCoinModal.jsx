import React, { Component } from 'react';
import {Dialog, AutoComplete, FlatButton, TextField} from 'material-ui';
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
    
    handleChange = (e) => {
        console.log(e.target.value)
    }

    handleAutoComplete = (coin) => {
        console.log(coin)
    }
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div id="dialog-holder">
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <form onSubmit={this.handleSubmit} >
                        <AutoComplete
                            floatingLabelText="Search for A coin"
                            filter={AutoComplete.fuzzyFilter}
                            dataSource={coins}
                            maxSearchResults={5}
                            required={true}
                            onNewRequest={(value)=>this.handleAutoComplete(value)}
                            onUpdateInput={(value)=>this.handleAutoComplete(value)}
                        />
                        <TextField
                            hintText="Price in USD per Coin"
                            floatingLabelText="Price Per Coin"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <TextField
                            hintText="Enter Amount Bought"
                            floatingLabelText="Amount Bought"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <TextField
                            hintText="Enter Date"
                            floatingLabelText="Date Purchased"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <FlatButton
                            label="Submit"
                            primary={true}
                            onClick={this.handleSubmit}
                            type="Submit"
                        />
                    </form>
                </Dialog>
            </div>
        )
    }
}

export default AddCoinModal;