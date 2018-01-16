import React from 'react';
import '../firebase.css'
import {ui, uiConfig} from '../config/firebaseui';

const LoginForm = (props) => {
    ui.start('#firebaseui-auth-container', uiConfig);

    return(
        <div id="firebaseui-auth-container"></div>
    )
}

export default LoginForm;