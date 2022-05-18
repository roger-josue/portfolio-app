import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import profileImg from '../../assets/profile.jpg';
import { Skills } from './Skills';


export const About = () => {

    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    return (
        <section id="about-section" ref={ref}>
            <h1 className="section-title">About</h1>
            {
                (inView) &&
                <>
                    <article className="about-col profile">
                        <h2>Who am I?</h2>
                        <figure>
                            <img src={profileImg} alt="profile" />
                        </figure>
                        <p>Creative Systems Engineer and Software developer based in Costa Rica, with a passion for building responsive websites and pixel-perfect UI’s, proficient and self-sufficient in JavaScript, HTML, CSS, SASS, React, Git, GitHub, among other tools. Currently, becoming a full-stack engineer and sharpening my front-end skills. I’m always open to learn new technologies and seize new opportunities. <br /></p>
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
