import "./Header.css"
import headerImage from "./header.jpg"

export default function Header() {
    return (
        <>
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitlesSm">Laughncruise</span>
                <span className="headerTitlesLg">Blog</span>
            </div>
            
                <img className='headerTitleImg'src={headerImage} alt=''/>
            </div>
            </>
        
    )
}
