import React from 'react'
import  "./Register.css";
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="register">
            <form  className="registerForm">
            <div className="registerTitle">
                    Register
                </div>
                <label>Username</label><br/>
                <input type="text" className="registerInput" placeholder="enter your ID..."/><br/>
                <label>Email</label><br/>
                <input type="email" className="registerInput" placeholder="enter your email..."/><br/>
                <label>Password</label><br/>
                <input type="password" className="registerInput" placeholder="enter your password..."/><br/>
                <button className="submitRegister">
                <Link className="link" to="/">Register</Link>
                </button>
            </form>
            <button className="loginButton">
            <Link className="link" to="/login">Login</Link>
            </button>
            
        </div>
    )
}
