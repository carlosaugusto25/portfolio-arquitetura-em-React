import { useState } from "react";
import { SiAffinitydesigner } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import './header.css';
import { useTexts } from "../../context/AppContext";

export function Header() {

    const { language, languages } = useTexts();
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to='/'>
                        <SiAffinitydesigner size={60} className="secondary-color" />
                    </Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>Menu</Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>X</Button>
                        <ul className="d-flex">
                            <li><Link to='/'>{languages[language]?.menu?.home}</Link></li>
                            <li><Link to='/about'>{languages[language]?.menu?.about}</Link></li>
                            <li><Link to='/projects'>{languages[language]?.menu?.projects}</Link></li>
                            <li><Link to='/contact'>{languages[language]?.menu?.contact}</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}