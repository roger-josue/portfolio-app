import React from 'react';
import profileImg from '../../assets/profile.jpg';


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
                    Now I have a serious passion for creating dynamic responsive websites.
                </p>
            </article>
            <article className="about-col skills">
                <h2>Skills</h2>

                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>HTML</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>80%</span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>CSS</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>80%</span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>SASS</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>70%</span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>Bootstrap</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>70%</span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>80%</span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>Angular</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>80%</span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar-header">
                        <span>Git</span>
                    </div>
                    <div className="skill-bar-level">
                        <span>50%</span>
                    </div>
                </div>
            </article>
        </section>
    )
}
