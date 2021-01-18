import React from 'react';
import { SkillBar } from './SkillBar';

export const Skills = () => {

    const skills = [
        {
            id: 1,
            skill: 'HTML',
            level: 80
        },
        {
            id: 2,
            skill: 'CSS',
            level: 85
        },
        {
            id: 3,
            skill: 'SASS',
            level: 80
        },
        {
            id: 4,
            skill: 'Bootstrap',
            level: 80
        },
        {
            id: 5,
            skill: 'JavaScript',
            level: 80
        },
        {
            id: 6,
            skill: 'React',
            level: 85
        },
        {
            id: 7,
            skill: 'Angular',
            level: 70
        },
        {
            id: 8,
            skill: 'Git',
            level: 80
        }
    ]
    return (
        <article className="about-col skills">
                <h2>Skills</h2>

                {
                    skills.map( skill => (
                        <SkillBar 
                            key={ skill.id} 
                            skill={ skill.skill} 
                            level={ skill.level} 
                        />
                    ))
                }
        </article>
    )
}
