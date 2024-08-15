
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import githubWhite from "../assets/github-mark-white.png"

export default function Footer(){
    return ( 
        <footer className="footer"> 
        <div className="container"> 
            <div className="row"> 
            <div className="col-md-6"> 
                <p>© 2024 MORLEY. All rights reserved.</p> 
            </div> 
            <div className="col-md-6 text-md-right"> 
                <ul className="social-icons list-unstyled"> 
                <li> 
                    <a 
    href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> 
                    <FontAwesomeIcon icon={githubWhite} /> 
                    </a> 
                </li> 
                <li> 
                    <a href= 
    "https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> 
                    <FontAwesomeIcon icon={githubWhite} /> 
                    </a> 
                </li> 
                </ul> 
            </div> 
            </div> 
        </div> 
        </footer> 
    );
}