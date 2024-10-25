import { AboutText } from "../../components/AboutText";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function About() {
    return (
        <>
            <Header />
            <Banner title="About" banner="about.png" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    );
}