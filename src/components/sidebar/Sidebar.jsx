import "./Sidebar.css"
import image from "../../components/topbar/image.jpg"

export default function Sidebar() {
    return (
        <>
        <div className='sidebar'>
            <div className="sideBarItem">
                <span className='sideBarTitle'>About me</span>
            <img style={{height: '250px', width:'280px'}} src={image} alt="" />
       
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Pariatur corrupti error eos in laborum soluta possimus ipsam tempor
         ibus natus quas! Voluptatibus, totam iste nulla esse aperiam et dolores atque natus.</p>
         
        </div>
        <div className="sideBarItem">
            <span className='sideBarTitle'> CATEGORIES</span>
            <ul className='sideBarList'> 
                <li className='sideBarListItem'>Life</li>
                <li className='sideBarListItem'>Music</li>
                <li className='sideBarListItem'>Style</li>
                <li className='sideBarListItem'>Stop</li>
                <li className='sideBarListItem'>Cinema</li>
                <li className='sideBarListItem'>Football</li>
            </ul>
        </div>
        <div className="sideBarItem">
            <span className='sideBarTitle'>FOLLOW US</span>
            <div className="sideBarIcon">
            <i className=" sideBarIconList fab fa-facebook-square"></i>
            <i className=" sideBarIconList fab fa-twitter-square"></i>
            <i className=" sideBarIconList fab fa-instagram-square"></i>
            <i className=" sideBarIconList fab fa-linkedin"></i>
            </div>
           
            
        </div>
        </div>
        </>
    )
}
