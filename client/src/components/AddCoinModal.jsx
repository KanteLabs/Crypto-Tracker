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
        if(prev.modalOpen ){
            return true;
        }else{
            return false;
        }
    }
    componentWillReceiveProps(prev, next){
        console.log(prev, next)
        if(prev.modalOpen && next.open !== true){
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
        let {name, value} = e.target;

        console.log(name, value)
    }

    handleAutoComplete = (coin) => {
        this.setState({
            chosenCoin: coin
        })
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
                    title="Add A Coin"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoDetectWindowHeight={false}
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
                            className="autocomplete-form"
                        />
                        <TextField
                            hintText="Price in USD per Coin"
                            floatingLabelText="Price Per Coin"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                            name="price"
                        />
                        <TextField
                            hintText="Enter Amount Bought"
                            floatingLabelText="Amount Bought"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                            name="amount"
                        />
                        <TextField
                            hintText="Enter Date"
                            floatingLabelText="Date Purchased"
                            required={true}
                            onChange={(e)=>this.handleChange(e)}
                            name="date"
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