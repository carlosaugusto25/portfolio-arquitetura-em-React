import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './hero.css';
import { useTexts } from '../../context/AppContext';

export function Hero() {
    
    const { language, languages } = useTexts();
    
    return (
        <div className='hero d-flex al-center'>
            <div className='hero-text'>
                <h1>{languages[language]?.hero?.title}</h1>
                <p>
                    {languages[language]?.hero?.subtitle}
                </p>
                <Link to='/about'>
                    <Button buttonStyle='secondary' arrow>{languages[language]?.hero?.cta}</Button>
                </Link>
            </div>
        </div>
    )
}