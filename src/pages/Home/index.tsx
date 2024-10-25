import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { ProjectsList } from "../../components/ProjectsList"

export function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
            <Footer />
        </div>
    )
}