import React from 'react';
import projectImg from '../../assets/project.jpg';
import todoAppImg from '../../assets/to-do.png';
import dogAppImg from '../../assets/dog-app.png';
import { Project } from './Project';


export const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'DogApp',
            img: dogAppImg,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 2,
            name: 'Todo-list-App',
            img: todoAppImg,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 3,
            name: 'Project',
            img: projectImg,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        }
    ]
    return (
        <section id="projects-section">
            <h1 className="section-title">Projects</h1>
            <section id="project-grid">
                {
                    projects.map( proj => (
                        <Project key={proj.id} name={ proj.name} img={ proj.img } desc={ proj.desc}/>
                    ))
                }
            </section>
        </section>
    )
}