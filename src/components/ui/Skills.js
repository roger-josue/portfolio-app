import React, { useEffect, useState } from 'react';
import { getSkills } from '../../firebase/firebase-CRUD';
import { SkillBar } from './SkillBar';

export const Skills = () => {

    const [skills, setSkills] = useState([]);

    const getFromSkills = async() => {

        try {
            const resp = await getSkills();  
            setSkills( resp );

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFromSkills();
    },[]);

    return (
        <article className="about-col skills">
                <h2>Skills</h2>

                {
                    skills.map( skill => (
                        <SkillBar 
                            key={ skill.id} 
                            skill={ skill.name} 
                            level={ skill.level} 
                        />
                    ))
                }
        </article>
    )
}
