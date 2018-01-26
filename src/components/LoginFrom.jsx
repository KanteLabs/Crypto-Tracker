import React, {Component} from 'react';
import '../firebaseui.css'
import {ui, uiConfig} from '../config/firebaseui';

class LoginForm extends Component {
    componentDidMount() {
        ui.start('#firebaseui-auth-container', uiConfig)
    }
    render(){
        return(
            <div id="firebaseui-auth-container"></div>
        )
    }
}

export default LoginForm;