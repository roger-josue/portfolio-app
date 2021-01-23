import React, { useEffect, useRef } from 'react'

export const SkillBar = ({ skill, level }) => {

    const barLevel = useRef(null);

    useEffect(() => {
        // barLevel.current.style = `animation: from-left 400ms 100ms ease-out forwards`
        setTimeout(() => {
            barLevel.current.style = `flex-basis: ${ (level * 70) / 100}%`;
        }, 100);

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
                <span>{ level }%</span>
            </div>
        </div>
    )
}
