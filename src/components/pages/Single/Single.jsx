import React from 'react'
import './Single.css'
import SinglePost from '../../Singlepost/SinglePost'
import Sidebar from '../../sidebar/Sidebar'

export default function Single() {
    return (
        <div className="single">
           <SinglePost/> 
           <Sidebar/>
        </div>
    )
}
