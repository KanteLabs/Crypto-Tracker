import React, { Component } from 'react';
import firebase from './config/firebase';
import './App.css';

var db = firebase.firestore();

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        
      }
    })
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;