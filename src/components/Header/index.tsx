import { SiAffinitydesigner } from "react-icons/si";
import { Link } from "react-router-dom";
import './header.css';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to='/'>
                        <SiAffinitydesigner size={60} className="secondary-color" />
                    </Link>
                    <nav>
                        <ul className="d-flex">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}