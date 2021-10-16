import React from 'react'
import './Write.css'
import image from "./image.jpg";

export default function Write() {
    return (
        <div className="write">
            
              < img className="writeImg" src={image} alt="writeImage"/>
          
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"> 
                    <i className="writeIcon fas fa-plus"></i>
                     </label>
                  <input type="file" id="fileInput" style={{display: "none"}}/>
                  <input type="text" placeholder="Title" className = "writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                   <textarea placeholder="tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="formbutton">Publish</button>
            </form>
        </div>
    )
}
