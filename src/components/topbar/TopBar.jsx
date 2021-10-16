import "./topbar.css"
import image from "./image.jpg"
import { Link } from "react-router-dom"


export default function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
            <i className=" topLeftIcon fab fa-facebook-square"></i>
            <i className=" topLeftIcon fab fa-twitter-square"></i>
            <i className=" topLeftIcon fab fa-instagram-square"></i>
            <i className=" topLeftIcon fab fa-linkedin"></i>
            
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className="link" to="/">About</Link>
                    </li>
                    <li className='topListItem'> 
                    <Link className="link" to="/">Contact</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className="link" to="/write">Write</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className="link" to="/login">{user && "LOGOUT"}</Link>
                    
                    </li>
                </ul>
            </div>
            <div className="topRight">
                { user ? 
                  (<img className='topImage' src={image} alt="user_image" />):
                  (<ul className="topList">
                      <li className='topListItem'>
                    <Link className="link" to="/register">Register</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className="link" to="/login">Login</Link>
                    </li>
                  </ul>)
                }
                
                <i className=" topSearch fas fa-search"></i>
            </div>
            
        </div>
    )
}
