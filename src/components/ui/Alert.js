import React, { useEffect, useRef } from 'react'

export const Alert = ({ alert, setAlert }) => {

    const { show, type, message } = alert;

    const alertRef = useRef(null);
    const iconRef = useRef(null);
    

    useEffect(() => {

        if( show ){
            alertRef.current.style = "animation: popup-alert 400ms ease-in-out forwards";
            iconRef.current.style = "animation: popup-alert 200ms 600ms ease-in-out forwards";

            setTimeout(() => {
                iconRef.current.style = "animation: popout-alert 100ms ease-in-out forwards";
                alertRef.current.style = "animation: popout-alert 400ms 200ms ease-in-out forwards";
                setTimeout(() => {    
                    setAlert({
                        show: false,
                        type: '',
                        message: ''
                    });
                }, 500);
            }, 4000);

        } 

    })

    return (
        <div
            className="dialog"
            ref={alertRef}
        >
            <div className={`alert ${ (type) && type}`}>
                <div className="alert-header"></div>
                <span style={{color: '#434343'}}>
                    {message}
                </span>
                <i 
                    className={`${(type === 'success') ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}`}
                    ref={iconRef}>
                </i>
            </div>
        </div>
    )
}
