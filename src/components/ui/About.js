import React from 'react';
import { Link } from 'react-scroll';
import profileImg from '../../assets/profile.jpg';
import { Skills } from './Skills';


export const About = () => {

    return (
        <section id="about-section">
            <h1 className="section-title">About</h1>
            <article className="about-col profile">
                <h2>Who am I?</h2>
                <figure>
                    <img src={ profileImg } alt="profile" />
                </figure>
                <p>I’m a Systems Engineer graduated at Universidad Internacional San Isidro Labrador in February 2020.
                    I’ve always had a passion for building things, and because of that feeling, I became a front-end
                    developer.
                    Now I have a serious passion for creating dynamic and responsive web UI.
                    Currently, I'm focusing on React and all its environment, 
                    but I'm always open to learn new technologies and seize new opportunities.
                    <br />
                    <Link className="link" to="contact-section">Let's talk!</Link>
                </p>
            </article>
            <Skills />
        </section>
    )
}
