import React, { useEffect, useRef, useState } from 'react';
import { sendMessage } from '../../firebase/firebase-CRUD';
// import { Alert } from './Alert';

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const Contact = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formValues;

    const emailInput = useRef(null);
    const nameInput = useRef(null);
    const messageInput = useRef(null);

    const invalidInput = "border: 1px solid rgba(255,0,0,0.60) !important;";
    
    useEffect(() => {
        if(email){

            if( !(emailRegExp.test( email )) ){
                emailInput.current.style = invalidInput;
            } else{
                emailInput.current.style = "border: 1px solid grey !important;";
                
            }
        }
    }, [email]);

    useEffect(() => {
        if(name){

            if( name.length < 2 ){
                nameInput.current.style = invalidInput;
            } else{
                nameInput.current.style = "border: 1px solid grey !important;";
            }
        }
    }, [name]);

    useEffect(() => {
        if(message){

            if( message.length < 2 ){
                messageInput.current.style = invalidInput;
            } else{
                messageInput.current.style = "border: 1px solid grey !important;";
            }
        }
    }, [message]);


    const createMessage = async() => {

        try {
            const resp = await sendMessage( formValues );  
            console.log(resp);

        } catch (error) {
            console.log(error)
        }
    }
    
    
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( name.length < 2){
            nameInput.current.style = invalidInput;
            nameInput.current.focus();
            return;
        }
        if (!(emailRegExp.test( email )) )
        {
            emailInput.current.style = invalidInput;
            emailInput.current.focus();

            return;
        }
        if( message.length < 2){
            messageInput.current.style = invalidInput;
            messageInput.current.focus();
            return;
        }

        createMessage();
    
    } 


    return (
        <section id="contact-section">
            <h1 className="section-title">Contact</h1>
            <div id="contact">
                <h3>Leave me a message!</h3>
                <form onSubmit={ handleSubmit }>
                    {/* <Alert message="I am an alert"/> */}
                    <input
                        name="name" 
                        ref={ nameInput }
                        type="text" 
                        placeholder="Name"
                        value={ name }
                        onChange={ handleInputChange } 
                    />

                    <input 
                        name="email"
                        ref={ emailInput } 
                        type="email" 
                        placeholder="Email"
                        value={ email }
                        onChange={ handleInputChange } 
                    />
                    <textarea 
                        name="message" 
                        ref={ messageInput }
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