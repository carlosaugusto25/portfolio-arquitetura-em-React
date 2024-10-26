import { useEffect, useState } from 'react';
import { Button } from '../Button';
import './contactform.css';
import { form } from '../../service/api';
import { useTexts } from '../../context/AppContext';

export function ContactForm() {

    const { language, languages } = useTexts()
    
    const [isFormValid, setIsFormValid] = useState(false);
    const [loadingFormSubmit, setLoadingFormSubmit] = useState(false);
    const [formSubmitMessage, setFormSubmitMessage] = useState(false);
    const [formData, setFormData] = useState({
        	name: '',
        	email: '',
        	message: '',
            access_key: 'a11dee77-0993-4781-a35e-02728a603c8c'
    })

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isFormValid) {
            setLoadingFormSubmit(true)
            await form.post('/submit', formData).then(response => {
                if(response.status === 200) {
                    setFormSubmitMessage(true)
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                        access_key: 'a11dee77-0993-4781-a35e-02728a603c8c'
                    })
                }
            }).catch(error => {
                console.log(error)
                alert(error)
                setFormSubmitMessage(false)
            }).finally(() => {
                setLoadingFormSubmit(false)
            })
            
        }
    }

    useEffect(()=>{
        const isValidEmail = (email:string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid:boolean = formData.name.trim() && formData.email.trim() && isValidEmail(formData.email) && formData.message.trim() ? true : false
        setIsFormValid(isValid)
    },[formData])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleChangeTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    return (
        <div className='container'>
            <div className='contact-form d-flex fd-column al-center'>
                <h2>{languages[language]?.contact?.title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex form-group'>
                        <input onChange={handleChange} className='form-input' type="text" name="name" placeholder={languages[language]?.contact?.pl1} id="name" />
                        <input onChange={handleChange} className='form-input' type="email" name="email" placeholder={languages[language]?.contact?.pl2} id="email" />
                    </div>
                    <div className='d-flex form-group'>
                        <textarea onChange={handleChangeTextArea} className='form-input' name="message" placeholder={languages[language]?.contact?.pl3} id="message" rows={4}></textarea>
                    </div>
                    <div className='d-flex jc-end al-center form-group'>
                        {formSubmitMessage && <p className='text-primary'>{languages[language]?.contact?.successMsg}</p>}
                        <div>
                            <Button disabled={!isFormValid || loadingFormSubmit} type='submit' buttonStyle='secondary'>{languages[language]?.general?.send}</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}