import React from 'react';
import projectImg from '../../assets/project.jpg';
import todoAppImg from '../../assets/to-do.png';
import todoAppPoster from '../../assets/to-do-big.png';
import dogAppImg from '../../assets/dog-app.png';
import dogAppPoster from '../../assets/dog-app-big.png';
import { Project } from './Project';


export const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'DogApp',
            thumbnail: dogAppImg,
            poster: dogAppPoster,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 2,
            name: 'Todo-list-App',
            thumbnail: todoAppImg,
            poster: todoAppPoster,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 3,
            name: 'Project',
            thumbnail: projectImg,
            poster: projectImg,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 4,
            name: 'DogApp',
            thumbnail: dogAppImg,
            poster: dogAppPoster,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 5,
            name: 'Todo-list-App',
            thumbnail: todoAppImg,
            poster: todoAppPoster,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        },
        {
            id: 6,
            name: 'Project',
            thumbnail: projectImg,
            poster: projectImg,
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi nihil excepturi, eum iste explicabo similique at quae modi voluptate.'
        }
    ]
    return (
        <section id="projects-section">
            <h1 className="section-title">Projects</h1>
            <section id="project-grid">
                {
                    projects.map( proj => (
                        <Project 
                            key={proj.id} 
                            name={ proj.name} 
                            thumbnail={ proj.thumbnail } 
                            poster={ proj.poster } 
                            desc={ proj.desc}
                        />
                    ))
                }
            </section>
        </section>
    )
}