import React from 'react';
import { scroller } from 'react-scroll';
import { Navbar } from './Navbar';
export const Hero = () => {

    const handleCallToAction = () => {
        scroller.scrollTo('projects-section');
    }
    
    return (
        <header>
            <Navbar />
            <div id="hero">
                <h1>Hello, I’m <strong>Josue Vargas.</strong>
                    I’m a front-end developer </h1>
                <button 
                    id="to-work"
                    onClick={ handleCallToAction }>View my work <i className="fas fa-arrow-right"></i> </button>
                
            </div>
        </header>

        
    )
}
