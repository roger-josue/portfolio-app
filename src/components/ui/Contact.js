import React, { useState } from 'react';
import { Alert } from './Alert';

export const Contact = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formValues;
    
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(emailRegExp.test( email )) )
        {
            alert("You have entered an invalid email address!")
            return;
        }
        if( name.length < 2){
            alert("You have entered an invalid name")
            return;
        }
        if( message.length < 2){
            alert("You have entered a short message")
        }

        console.log(formValues);

    }


    return (
        <section id="contact-section">
            <h1 className="section-title">Contact</h1>
            <div id="contact">
                <h3>Leave me a message!</h3>
                <form onSubmit={ handleSubmit }>
                    <Alert message="I am an alert"/>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Name"
                        value={ name }
                        onChange={ handleInputChange } 
                    />

                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        value={ email }
                        onChange={ handleInputChange } 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your message" 
                        cols="24" 
                        rows="12"
                        value={ message }
                        onChange={ handleInputChange }>
                    </textarea>
                    <button name="send" type="submit">SUBMIT</button>
                </form>
            </div>
        </section>
    )
}