import { Banner } from "../../components/Banner";
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Contact() {
    return (
        <>
            <Header/>
            <Banner title="Contact" banner="contact.png"/>
            <ContactForm />
            <Footer />
        </>
    );
}