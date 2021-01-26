import React, { useEffect, useRef } from 'react'

export const SkillBar = ({ skill, level }) => {

    const barLevel = useRef(null);
    const percentageRef = useRef(null);
    

    useEffect(() => {
        setTimeout(() => {
            barLevel.current.style = `flex-basis: ${ (level * 70) / 100}%`;
            percentageRef.current.style = "animation: fade-in 600ms 500ms ease-in-out forwards";
        }, 300);

    }, [level])
    
    return (
        <div className="skill-bar">
            <div className="skill-bar-header">
                <span>{ skill }</span>
            </div>
            <div 
                className="skill-bar-level" 
                ref={ barLevel }
            >
                <span ref={ percentageRef }>{ level }%</span>
            </div>
        </div>
    )
}
