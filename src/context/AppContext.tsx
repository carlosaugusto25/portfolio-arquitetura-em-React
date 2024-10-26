import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TextLangageProps } from "../@types/interfaces";
import { api } from "../service/api";

interface ContextProps {
    language: 'br' | 'en' ;
    setLanguage: (language: 'br' | 'en') => void;
    languages: TextLangageProps;
    loading: boolean;
}

export const AppContext = createContext<ContextProps>({} as ContextProps);

interface ProviderProps {
    children: ReactNode
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {

    const savedLanguage = localStorage.getItem('language');
    const [language, setLanguage] = useState(savedLanguage ? savedLanguage : 'br');
    const [languages, setLanguages] = useState<TextLangageProps>({} as TextLangageProps);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLanguages = async () => {
            setLoading(true);
            await api.get('/webtext').then(response => {
                setLanguages(response.data);
            }).catch(error => {
                alert(error)
            }).finally(() => {
                setLoading(false);
            })
        }
        loadLanguages();
    }, [])

    useEffect(()=>{
        localStorage.setItem('language', language)
    },[language])

    return (
        <AppContext.Provider value={{language: language === 'br' ? 'br' : 'en', setLanguage, languages, loading}}>
            {children}
        </AppContext.Provider>
    )
}

function useTexts(): ContextProps {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context
}

export { AppProvider, useTexts };