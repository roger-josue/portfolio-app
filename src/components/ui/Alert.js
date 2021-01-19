import React, { useEffect, useRef } from 'react'

export const Alert = ({ message }) => {

    const alert = useRef(null);

    useEffect(() => {
        alert.current.style = "animation: popup-alert 400ms ease-in-out forwards";
    }, [])
    return (
        <span 
            className="alert success"
            ref={ alert }
            >
            { message}
        </span>
    )
}
