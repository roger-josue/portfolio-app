import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Project } from './Project';
import { getProjects } from '../../firebase/firebase-CRUD';


export const Projects = () => {

    const { ref, inView } = useInView({threshold: 0.5, triggerOnce: true});

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjectsData();
    }, []);

    const getProjectsData = async() => {
        const projectsDoc = await getProjects();
        setProjects( projectsDoc );
    }
    
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
                            url={ proj.url}
                            repository_url={ proj.repository_url } 
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