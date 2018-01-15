import * as firebase from 'firebase';
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBzfI9MGsRjvS8reNnxozBP1JLEXsgGRWk",
    authDomain: "crypto-watcher-694b9.firebaseapp.com",
    databaseURL: "https://crypto-watcher-694b9.firebaseio.com",
    projectId: "crypto-watcher-694b9",
    storageBucket: "crypto-watcher-694b9.appspot.com",
    messagingSenderId: "873840886181"
  };
	
firebase.initializeApp(config);
firebase.firestore().enablePersistence()

export default firebase;