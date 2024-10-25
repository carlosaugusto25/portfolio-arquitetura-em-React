import './footer.css';
import brazil from '../../assets/brazil.svg';
import usa from '../../assets/usa.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg'
import { SiAffinitydesigner } from 'react-icons/si';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <SiAffinitydesigner size={60} className="secondary-color" style={{ margin: '0 0 25px 0' }} />
                        <p className='gray-1-color'>Designs futuristas e minimalistas para o seu ambiente</p>
                        <div className='d-flex social-links'>
                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook Logo" />
                            </a>
                            <a href="http://www.x.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter Logo" />
                            </a>
                            <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="Linkedin Logo" />
                            </a>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram Logo" />
                            </a>
                        </div>

                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p className='gray-1-color'>Rua Maria Joaquina, 123 - Natal - RN</p>
                            <p className='gray-1-color'>superte@architecture.com</p>
                            <p className='gray-1-color'>(84)98888-7777</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='gray-1-color'>© 2024. Architecture. All Rights Reserved.</p>
                    <div className='d-flex langs-area'>
                        <img src={brazil} alt="Brazil" height={'29px'} />
                        <img src={usa} alt="USA" height={'29px'} />
                    </div>
                </div>
            </div>
        </footer>
    )
}