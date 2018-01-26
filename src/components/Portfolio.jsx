import React, { Component } from 'react';
import firebase from '../config/firebase';
import AddCoinModal from './AddCoinModal';
import TrackedCoins from './TrackedCoins';
import { Redirect } from 'react-router-dom';
import {Paper} from 'material-ui';

var db = firebase.firestore();

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            userUID: false,
            redirect: false,
            page: '',
            modalOpen: false,
            authState: false,
            coinData: false
        }
    }

    componentDidMount() {
        let coinArray = {};
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    userID: user.uid,
                    authState: true
                })
                db.collection('users').doc(user.uid).collection('portfolio').get().then((res)=>{
                    res.forEach((coin)=>{
                        return coinArray[coin.id] = coin.data();
                    })
                    this.setState({
                        coinData: coinArray,
                    })
                    console.log(coinArray)
                }).catch((err)=>{console.log(err)})
                
            }else{
                this.setState({
                    redirect: true,
                    page:'/login'
                })
            }
        })
    }

    handleAddCoinModal = () => {
        this.setState({
            modalOpen: true
        })
    }
    closeModal=(status)=>{
       if(status){
           this.setState({
            modalOpen: false
           })
       }
    }
    renderCoins = () =>{
       let {coinData} = this.state;
        if(Object.keys(coinData).length > 0){
            return(
                <h1>Render Coins</h1>
            )
        }else{
            return (
                <h1>Loading</h1>
            );
        }
    }
    render(){
        const {redirect, page} = this.state;
        const paper = {
            padding: '1em',
            width: '90vw',
            margin: '20px auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          };
        return(
            <section id="portfolio">
                {redirect ? <Redirect to={page} />: null}
                <div className="page-cointainer">
                    <Paper style={paper} zDepth={3} id="add-coin" onClick={this.handleAddCoinModal}>
                        <i className="material-icons">add_circle</i><p> Add A Coin</p>
                    </Paper>
                    <AddCoinModal modalOpen={this.state.modalOpen} closeModal={(status)=>this.closeModal(status)}/>
                    {this.renderCoins()}
                </div>
            </section>
        )
    }
}

export default Portfolio;