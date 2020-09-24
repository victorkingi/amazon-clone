import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            }).catch((err) => {
            alert(err.message);
        })
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                history.push("/");
            })
            .catch((err) => {
                alert(err.message);
            })


    }

    return (
        <div className="login">
            <Link to="/" >
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)}  type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our
                        Interest-Based Ads Notice.</p>
                    <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;