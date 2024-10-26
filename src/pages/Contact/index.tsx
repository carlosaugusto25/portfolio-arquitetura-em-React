import { Banner } from "../../components/Banner";
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useTexts } from "../../context/AppContext";

export function Contact() {
    
    const { language, languages } = useTexts();
    
    return (
        <>
            <Header/>
            <Banner title={languages[language]?.menu.contact} banner="contact.png"/>
            <ContactForm />
            <Footer />
        </>
    );
}