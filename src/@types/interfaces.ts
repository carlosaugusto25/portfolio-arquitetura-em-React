export interface ProjectsProps {
    id: string;
    title: string;
    thumb: string;
    subtitle: string;
}

interface WebTextsProps {
    menu: {
        home: string;
        about: string;
        projects: string;
        contact: string;
        language: string;
        favoriteTitle: string;
    },
    hero: {
        title: string;
        subtitle: string;
        cta: string;
    },
    about: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
    },
    contact: {
        title: string;
        pl1: string;
        pl2: string;
        pl3: string;
        successMsg: string;
    },
    general: {
        required: string;
        invalidEmail: string;
        error: string;
        footerLogoText: string;
        pages: string;
        contact: string;
        send: string;
    },
    projects: {
        title: string;
        subtitle: string;
    }
}

export interface TextLangageProps {
    br: WebTextsProps;
    en: WebTextsProps;
}