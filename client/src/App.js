import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import firebase from './config/firebase';
import './App.css';

var db = firebase.firestore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drawerStatus: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        console.log(user)
      }else{
        console.log("not signed in")
      }
    })
  }

  changeDrawerStatus = (status) => {
    console.log(status);
    if(status){
      this.setState({ drawerStatus: status })
    }else{
      this.setState({ drawerStatus: false})
    }
  }

  render() {
    return (
      <main id="main">
        <Navbar changeDrawerStatus={(status)=>this.changeDrawerStatus(status)}/>
        <SideMenu openState={this.state.drawerStatus} changeDrawerStatus={(status)=>this.changeDrawerStatus(status)}/>
        <Router>
          <Switch>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;