import { useTexts } from '../../context/AppContext';
import './abouttext.css';

export function AboutText() {
    
    const { language, languages } = useTexts();
    
    return (
        <div className="container">
            <div className="text-section d-flex">
                <div className="text-section-text">
                    <h2>{languages[language]?.about?.title}</h2>
                </div>
                <div className="text-section-text">
                    <p className="primary-color">{languages[language]?.about?.p1}</p>
                    <p>{languages[language]?.about?.p2}</p>
                    <p>{languages[language]?.about?.p3}</p>
                </div>
            </div>
        </div>
    )
}