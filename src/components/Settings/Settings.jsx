import React from 'react'
import Sidebar from '..//..//components/sidebar/Sidebar'
import "./Settings.css"
import PP from './image.jpg'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUT">UPDATE YOUR ACCOUNT</span>
                    <span className="settingsDT">DELETE ACCOUNT</span>
                </div>
                <form className="settingsForm">
                    <label>PROFILE PICTURE</label>
                    <div className="settingsPP">
                        <img src={PP} alt="Profie pic" />
                        <label htmlFor="fileInput">
                            <i className="pIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>

                    <label> USERNAME </label><br />
                    <input type="text" placeholder="John" /><br />
                    <label> Email </label><br />
                    <input type="email" placeholder="@gmail.com" /><br />
                    <label> PASSWORD </label><br />
                    <input type="password" placeholder="your password" /><br />

                    <button className="submitForm">Update</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}
