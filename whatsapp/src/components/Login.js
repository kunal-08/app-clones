import React, {useEffect, useState} from 'react';
import "../css/Login.css"
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";

import whatsappLogo from "../images/whatsapp.svg"
import {useStateValue} from "../StateProvider";
import {actionType} from "../reducer";

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithRedirect(provider)
            .then((result) =>
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                }))
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={whatsappLogo}/>

                <h2>Sign to WhatsApp</h2>

                <Button onClick={signIn}>Sign In with google</Button>
            </div>
        </div>
    );
}

export default Login;
