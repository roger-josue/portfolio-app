import React, { useEffect, useRef } from 'react';
import { scroller } from 'react-scroll';
import { Navbar } from './Navbar';
export const Hero = () => {

    const typewriter = useRef(null);

    useEffect(() => {
        
        createTypewriter();
        typewriter.current.style = 'animation: gradient-in 6s 0s 5 alternate forwards';

    },[]);

    const createTypewriter = async() => {
        const text = 'Hello, I’m Josue Vargas. I’m a front-end developer';
        
        for (const char of text) {
            await new Promise( ( resolve )=>{    
                setTimeout(() => {
                    resolve();
                }, 100);
            })
            typewriter.current.innerHTML += char;
        }

        // TODO: type end bar: | blink effect
        // typewriter.current.innerHTML += '|';

    }

    const handleCallToAction = () => {
        scroller.scrollTo('projects-section');
    }
    
    return (
        <header>
            <Navbar />
            <div id="hero">
                <h1 ref={ typewriter } > </h1>
                <button 
                    id="to-work"
                    onClick={ handleCallToAction }>View my work <i className="fas fa-arrow-right"></i> </button>
                
            </div>
        </header>

        
    )
}
