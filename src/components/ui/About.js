import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import profileImg from '../../assets/profile.jpg';
import { Skills } from './Skills';


export const About = () => {

    const { ref, inView } = useInView({threshold: 0.5, triggerOnce: true});

    return (
        <section id="about-section" ref={ ref }>
            <h1 className="section-title">About</h1>
            {
                (inView) &&
                <>
                    <article className="about-col profile">
                        <h2>Who am I?</h2>
                        <figure>
                            <img src={ profileImg } alt="profile" />
                        </figure>
                        <p>I’m a Systems Engineer graduated at Universidad Internacional San Isidro Labrador in February 2020.
                            I’ve always had a passion for building things, and because of that feeling, I became a front-end
                            developer.
                            Now I have a serious passion for creating dynamic and responsive web UI.
                            Currently, I'm focusing on React, 
                            but I'm always open to learn new technologies and seize new opportunities.
                            <br />
                        </p>
                        <div className="shakeText">
                            <Link className="link" to="contact-section">Let's talk!</Link>
                        </div>
                    </article>
                    <Skills />
                </>              
            }
        </section>
    )
}
