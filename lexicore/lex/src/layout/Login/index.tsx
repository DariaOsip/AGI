import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return <div className="app">
        <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
}

export default Login;