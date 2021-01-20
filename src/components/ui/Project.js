import React from 'react'

export const Project = ({ name, img, desc}) => {
    return (
        <div className="project-card">
            <figure>
                <img src={img} alt="" />
                <figcaption>
                    <h3 className="project-title">{ name }</h3>
                    <p>{ desc }</p>
                    <button>Read more <i className="fas fa-info-circle"></i></button>
                </figcaption>
            </figure>
        </div>
    )
}
