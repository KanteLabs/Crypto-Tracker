import React, { Component } from 'react';
import firebase from '../config/firebase';
var db = firebase.firestore();

// class TrackedCoins extends Component {
//     constructor(props){
//         super(props);
//         this.state = {

//         }
//     }

//     componentDidMount() {
//         let userid = this.props.userid;
//         console.log(userid)
//         // db.collection()
//         console.log(this.props)
//     }

//     render(){
//         return(
//             <div id="tracked-coins">
//                 <h1>hi {this.props.userid}</h1>
//             </div>
//         )
//     }
// }

const TrackedCoins = (props) => {
    const { coinData } = props;
    return(
        <div id="tracked-coins">
            <ul>
                {Object.keys(coinData).map((coin, i)=>{
                    console.log(coin, coinData[coin])
                    return(
                        <li className="coin" id={coin} key={i}>
                            {Object.values(coinData[coin]).map((item, x)=>{
                                return(
                                    <p className="item" key={x}>{item.amount}</p>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TrackedCoins;