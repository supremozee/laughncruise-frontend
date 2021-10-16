import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <form  className="loginForm">
            <div className="loginTitle">
                    Login
                </div>
                <label>Email</label><br/>
                <input type="email" className="loginInput" placeholder="enter your email..."/><br/>
                <label>Password</label><br/>
                <input type="password" className="loginInput" placeholder="enter your password..."/><br/>
                <button className="submitLogin">
                <Link className="link" to="/">Login</Link>
                </button>
            </form>
            <button className="loginButton">
            <Link className="link" to="/register">Register</Link>
            </button>
            
        </div>
    )
}
