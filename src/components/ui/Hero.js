import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';
import { Navbar } from './Navbar';
export const Hero = () => {

    const { ref, inView } = useInView({threshold: 0.5, triggerOnce: true});

    const typewriter = useRef(null);

    useEffect(() => {
        
        if(inView){

            createTypewriter();
            typewriter.current.style = 'animation: gradient-in 6s 0s 3 alternate forwards';
        
        }

    },[inView]);

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

            <div id="hero" ref={ ref }>
                {
                    (inView) &&
                    <>
                        <h1 ref={ typewriter } > </h1>
                        <button 
                            id="to-work"
                            onClick={ handleCallToAction }>View my work <i className="fas fa-arrow-right"></i> </button>
                    </>
                }
            </div>
        </header>

        
    )
}
