import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {

    const [activeLink, setActiveLink] = useState('hero');
    const [toggleMenu, setToggleMenu] = useState(false);
    const menu = useRef(null);

    useEffect(() => {
        
        window.addEventListener('resize', () =>{
            if( window.innerWidth >= 768){
                menu.current.style = 'visibility: visible;';
            }
            else{
                setToggleMenu(false);
                menu.current.style = 'visibility: hidden;';
            }
        });

        return () => {
            window.removeEventListener('resize',window);
        }
    }, [])

    const handleActive = ( active ) => {
        setActiveLink(active);    
    }

    const handleToggle = (e) => {
        setToggleMenu( toggle => !toggle );
        if( toggleMenu) {
            menu.current.style = 'animation: menu-out 400ms ease-in-out forwards';
        } else{
            menu.current.style = 'animation: menu-in 400ms ease-in-out forwards';
        }
    }

    return (
        <nav>
                <div id="menu-toggle">
                    <input id="menu-check" type="checkbox" checked={ toggleMenu} onChange={ handleToggle }/>
                    <span id="toggler">
                    </span>
                </div>
                <ul id="menu" ref={ menu }>
                    <li><Link 
                        className={ (activeLink === 'hero') ? 'active' : ''} 
                        onClick={() => handleActive('hero') } 
                        to="hero">Home
                        </Link>
                    </li>
                    <li><Link 
                        className={ (activeLink === 'about') ? 'active' : ''} 
                        onClick={() => handleActive('about') } 
                        to="about-section">About
                        </Link>
                    </li>
                    <li><Link 
                        className={ (activeLink === 'projects') ? 'active' : ''} 
                        onClick={() => handleActive('projects') } 
                        to="projects-section">Projects
                        </Link>
                    </li>
                    <li><Link 
                        className={ (activeLink === 'contact') ? 'active' : ''} 
                        onClick={() => handleActive('contact') } 
                        to="contact-section">Contact
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}
