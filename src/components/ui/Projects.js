import React from 'react';
import { useInView } from 'react-intersection-observer';
import projectImg from '../../assets/project.jpg';
import todoAppImg from '../../assets/to-do.png';
import todoAppPoster from '../../assets/to-do-big.png';
import dogAppImg from '../../assets/dog-app.png';
import dogAppPoster from '../../assets/dog-app-big.png';
import { Project } from './Project';


export const Projects = () => {

    const { ref, inView } = useInView({threshold: 0.5, triggerOnce: true});


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
        }
    ]
    
    return (
        <section id="projects-section" ref={ ref }>
            <h1 className="section-title">Projects</h1>
            {
                (inView) &&

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

            }
        </section>
    )
}