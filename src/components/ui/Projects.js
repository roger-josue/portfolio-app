import React from 'react';
import projectImg from '../../assets/project.jpg';


export const Projects = () => {
    return (
        <section id="projects-section">
            <h1 className="section-title">Projects</h1>
            <section id="project-grid">
                <div className="project-card">
                    <figure>
                        <img src={ projectImg } alt="" />
                        <figcaption>
                            <h3 className="project-title">Dog App</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil
                                excepturi, eum iste explicabo similique at quae modi voluptate.</p>
                            <a href="/">Read more <i className="fas fa-info-circle"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <img src={ projectImg } alt="" />
                        <figcaption>
                            <h3 className="project-title">Todo App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab in neque. Placeat, vel
                                minima.</p>
                            <a href="/">Read more <i className="fas fa-info-circle"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <img src={ projectImg } alt="" />
                        <figcaption>
                            <h3 className="project-title">Dog App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab in neque. Placeat, vel
                                minima.</p>
                            <a href="/">Read more <i className="fas fa-info-circle"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <img src={ projectImg } alt="" />
                        <figcaption>
                            <h3 className="project-title">Dog App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab in neque. Placeat, vel
                                minima.</p>
                            <a href="/">Read more <i className="fas fa-info-circle"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <img src={ projectImg } alt="" />
                        <figcaption>
                            <h3 className="project-title">Dog App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab in neque. Placeat, vel
                                minima.</p>
                            <a href="/">Read more <i className="fas fa-info-circle"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div className="project-card">
                    <figure>
                        <img src={ projectImg } alt="" />
                        <figcaption>
                            <h3 className="project-title">Dog App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab in neque. Placeat, vel
                                minima.</p>
                            <a href="/">Read more <i className="fas fa-info-circle"></i></a>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </section>
    )
}