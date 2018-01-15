import React, { Component } from 'react';
import Navbar from './components/Navbar';
import firebase from './config/firebase';
import './App.css';

var db = firebase.firestore();

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        console.log(user)
      }else{
        console.log("not signed in")
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;