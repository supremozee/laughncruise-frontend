import React from 'react'
import postimage from "./post.jpeg"
import './Post.css'

export default function Post() {
    return (
        <div className="post">
            <img style={{ width: '340px', height: '280px', borderRadius: '10px', objectFit: 'cover', transition:"2s" }} src={postimage} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">life</span>
                </div>
                <div className="postTitle">
                   Lorem ipsum, dolor sit amet</div>
                <div className="postDate">An hour ago</div>

                <p className="postDesc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    explicabo temporibus, facere cupiditate.
                    Eaque ipsum iste vitae voluptatum voluptatem similique,
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint numquam ad ipsa assumenda!
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint
                    Recusandae quis nostrum veritatis incidunt ipsum sint numquam ad ipsa assumenda!
                </p>
            </div>

        </div>
    )
}
