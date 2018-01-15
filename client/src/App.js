import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Navbar />
      </MuiThemeProvider>
    );
  }
}

export default App;