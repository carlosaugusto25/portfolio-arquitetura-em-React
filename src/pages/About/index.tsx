import { AboutText } from "../../components/AboutText";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useTexts } from "../../context/AppContext";

export function About() {
    
    const { language, languages } = useTexts();
    
    return (
        <>
            <Header />
            <Banner title={languages[language]?.menu.about} banner="about.png" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    );
}