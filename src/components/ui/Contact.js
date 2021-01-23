import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { sendMessage } from '../../firebase/firebase-CRUD';
import { Alert } from './Alert';

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const Contact = () => {

    const { ref, inView } = useInView({threshold: 0.5, triggerOnce: true});

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [spinner, setspinner] = useState(false);

   const [alert, setAlert] = useState({
       show: false,
       type: '',
       message: ''
   });

   const { show } = alert;


    const { name, email, message } = formValues;

    const emailInput = useRef(null);
    const nameInput = useRef(null);
    const messageInput = useRef(null);

    const invalidInput = "border: 1px solid rgba(255,0,0,0.60) !important;";

    const popupRef = useRef(null);

    useEffect(() => {
        if( inView ){
            popupRef.current.style = 'animation: popup-alert 400ms 600ms ease-out forwards'
        }
    }, [inView])
    
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

    useEffect(() => {
        if(show){
            document.body.classList.add('stop-scrolling');
        } else{
            document.body.classList.remove('stop-scrolling');
        }
    }, [show]);


    const createMessage = async() => {

        try {
            const resp = await sendMessage( formValues );
            setAlert({
                show: true,
                type: 'success',
                message: resp.res
            });

            setspinner(false);

            setFormValues({
                name: '',
                email: '',
                message: ''
            });
            
        } catch (error) {
            setAlert({
                show: true,
                type: 'danger',
                message: 'There has been an error, your message could not be sent'
            });
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

        setspinner(true);
        createMessage();
    
    } 


    return (
        <section id="contact-section" ref={ ref }>
            <h1 className="section-title">Contact</h1>
            {
                ( inView ) &&

                <div id="contact">
                    <h3 ref={ popupRef }>Leave me a message!</h3>
                    <form onSubmit={ handleSubmit }>
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
                        <button 
                            name="send" 
                            type="submit"
                            style={{fontSize: '1.125rem', padding: '0.50em'}}
                            disabled={spinner}>{ (spinner) ? <i className="fas fa-spinner fa-spin"></i> : 'SUBMIT'}</button>
                    </form>
                </div>
            
            }
            {
                (show) && 
                <Alert alert={ alert } setAlert={ setAlert }/>
            }
        </section>
    )
}