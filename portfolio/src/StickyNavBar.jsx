import "./StickyNavBar.css"
import github_icon from "./assets/github_icon.jpg"

export default function StickNavBar() {
    return (
        <nav style={{position:"sticky", top:"0px"}}>
            <ul>
                <li>Projects</li>
                <li>Resume</li>
                <li>About</li>
                <li>Contact</li>
                <li><img src={github_icon} alt="" style={{width:"45px"}}/></li>
            </ul>
        </nav>
    )
}