import emailjs from '@emailjs/browser'
import { useContext, useState, useRef } from 'react'
import { ThemeContext } from '../../context/themeContext'

import Success from '../Success/Success'
import './Contact.scss'

const Contact = () => {
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const formRef = useRef()

    const onSendMessage = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_8emahoh',
                'template_us9u4j8',
                formRef.current,
                'vGDDr_bueDmnw4MaF'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setDone(true)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <div id="contact" className="contact">
            <div className="contact-container">
                <h1 className="main-title">Contact</h1>
                <h3 className="secondary-title">Lets Work Together</h3>
                <div className="form-wrapper">
                    {done ? (
                        <Success />
                    ) : (
                        <form ref={formRef} onSubmit={onSendMessage}>
                            <input
                                style={{
                                    backgroundColor: darkMode ? '#333' : '#ddd',
                                }}
                                type="text"
                                name="user_name"
                                placeholder="Name"
                                required
                            />
                            <input
                                style={{
                                    backgroundColor: darkMode ? '#333' : '#ddd',
                                }}
                                type="text"
                                name="user_subject"
                                placeholder="Subject"
                                required
                            />
                            <input
                                style={{
                                    backgroundColor: darkMode ? '#333' : '#ddd',
                                }}
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                required
                            />
                            <textarea
                                style={{
                                    backgroundColor: darkMode ? '#333' : '#ddd',
                                }}
                                row="5"
                                type="text"
                                name="message"
                                placeholder="Message"
                                required
                            />
                            <button className={darkMode ? 'dark' : 'light'}>
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact
