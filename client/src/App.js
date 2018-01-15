import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
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
    this.setState({
      drawerStatus: status
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Navbar changeDrawerStatus={(status)=>this.changeDrawerStatus(status)}/>
        <Drawer openState={this.state.drawerStatus}/>
      </MuiThemeProvider>
    );
  }
}

export default App;