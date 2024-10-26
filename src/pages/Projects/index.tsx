import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProjectsList } from "../../components/ProjectsList";
import { useTexts } from "../../context/AppContext";

export function Projects() {
    
    const { language, languages } = useTexts();
    
    return (
        <>
            <Header />
            <Banner title={languages[language]?.menu.projects} banner="projects.png" />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}