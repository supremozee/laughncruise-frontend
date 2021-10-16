import React from 'react'
import './SinglePost.css'
import image from './image.jpg'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlepostWrapper">
                <img className="singlePostImg" style={{ width: '100%', height: '300px' }} src={image} alt="" />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.

                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePosticon fas fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span>Author: sarki</span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam praesentium, molestiae laboriosam iste fugit numquam sed!
                    Aut non doloribus alias voluptates expedita,
                    voluptas laboriosam debitis numquam? Doloremque excepturi repellat modi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam praesentium, molestiae laboriosam iste fugit numquam sed!
                    Aut non doloribus alias voluptates expedita,
                    voluptas laboriosam debitis numquam? Doloremque excepturi repellat modi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam praesentium, molestiae laboriosam iste fugit numquam sed!
                    Aut non doloribus alias voluptates expedita,
                    voluptas laboriosam debitis numquam? Doloremque excepturi repellat modi?
                </p>


            </div>

        </div>


    )
}
