import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Confetti from 'react-confetti';


const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xjvndznv', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                setShowConfetti(true);
                setEmail('');
                setMessage('');
                // Stop confetti after 5 seconds
                setTimeout(() => {
                    setShowConfetti(false);
                }, 6000);
            } else {
                console.error('Form submission error');
            }
        } catch (error) {
            console.error('Form submission error', error);
        }
    };

    return (
        <>
            <h1 className='SkillsHeading' style={{ marginTop: '100px' }}> Contact <b> me </b> </h1>
            <div id="contact">
                {submitted ? (
                    <div>
                        {showConfetti && <Confetti />}
                        <div id="thank-you-message">Thank you for your message!</div>
                    </div>
                ) : (
                    <div id="contact-form">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="subject" value="Contact request from personal website" />
                            <input
                                type="email"
                                name="replyto"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <Button type="submit" variant="primary">Send</Button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default ContactForm;
