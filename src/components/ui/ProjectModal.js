import React, { useEffect, useRef } from 'react';

export const ProjectModal = ({ setShowModal, name, url, repository_url, poster, desc }) => {

    const modalRef = useRef(null);

    useEffect(() => {
            modalRef.current.style = "animation: fade-in 400ms ease-in-out forwards";
    }, []);
    
    const handleCloseModal = () => {
        modalRef.current.style = "animation: fade-out 400ms ease-out forwards";    
        setTimeout(() => {
            setShowModal(false);
        }, 200);
    }
    
    return (
        <div className="dialog" style={{opacity: 0}} ref={ modalRef }>
            <div className="modal">
                <button className="modal-close" onClick={ handleCloseModal }><i className="fas fa-times"></i></button>
                <h2 className="modal-title">{ name }</h2>
                <div className="modal-body-content">
                    <p>{ desc }</p>
                </div>
                <div className="modal-visit-pages">
                <a target="_blank" rel="noreferrer" href={ url }> View project demo<i className="fas fa-external-link-alt"></i> </a>
                <a target="_blank" rel="noreferrer" href={ repository_url }> View source code<i className="fab fa-github"></i> </a>
                </div>
                <figure className="modal-body-img">
                    <img src={ poster } alt=""/>
                </figure>

            </div> 
        </div>
    )
}
