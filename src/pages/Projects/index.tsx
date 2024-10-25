import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProjectsList } from "../../components/ProjectsList";

export function Projects() {
    return (
        <>
            <Header />
            <Banner title="Projects" banner="projects.png" />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}