import React from 'react'

export const SkillBar = ({ skill, level }) => {
    
    return (
        <div className="skill-bar">
            <div className="skill-bar-header">
                <span>{ skill }</span>
            </div>
            <div className="skill-bar-level" style={ {
                flexBasis: `${ (level * 70) / 100}%`
            }}>
                <span>{ level }%</span>
            </div>
        </div>
    )
}
