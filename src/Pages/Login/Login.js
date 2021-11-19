import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
            
    }
    return (
        <div>
            <h1>Please Log in</h1>
            {/* <>
            <div>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="password"/>
                    <br /><br />
                    <input className="btn btn-success" type="submit" value="Login" />
                </div>
                <p>new to Madiplus? <Link to="/registration">Create Account</Link></p>
            </> */}
            <button onClick={handleGoogleLogin} className="btn btn-success">Sign in Google</button>
        </div>
    );
};

export default Login;