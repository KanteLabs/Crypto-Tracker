import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import firebase from './config/firebase';
import './App.css';

var db = firebase.firestore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drawerStatus: false,
      user: false,
      authState: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({
          user: user.toJSON(),
          authState: true
        })
      }else{
        console.log("not signed in")
      }
    })
  }

  changeDrawerStatus = (status) => {
    if(status){
      this.setState({ drawerStatus: status })
    }else{
      this.setState({ drawerStatus: false})
    }
  }

  render() {
    return (
      <Router>
        <main id="main">
          <Navbar changeDrawerStatus={(status)=>this.changeDrawerStatus(status)}/>
          <SideMenu openState={this.state.drawerStatus} changeDrawerStatus={(status)=>this.changeDrawerStatus(status)} authState={this.state.authState}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/portfolio" render={() => <Portfolio /> } />
            <Route exact path="/login" render={() => <Login /> } />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;