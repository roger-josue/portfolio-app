import React from 'react';

export const Contact = () => {
    return (
        <section id="contact-section">
            <h1 className="section-title">Contact</h1>
            <div id="contact">
                <h3>Leave me a message!</h3>
                <form>
                    <input name="name" type="text" placeholder="Name" />
                    <input name="email" type="text" placeholder="Email" />
                    <textarea name="message" placeholder="Your message" cols="24" rows="12"></textarea>
                    <button name="send" type="button">SUBMIT</button>
                </form>
            </div>
        </section>
    )
}