const functions = require('firebase-functions');
const axios = require('axios');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.etherBalance = functions.https.onRequest((req, res)=>{
    let apiKey = functions.config().etherscan.key;
    axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=0xcf82fdd676ffebf4f5ebe344b06f76110be6942b&tag=latest&apikey=${apiKey}`).then((data)=>{
        console.log(data.data)
        return res.send(data.data)
    }).catch((err)=>{
        console.log(err)
        return res.send(err)
    })
})