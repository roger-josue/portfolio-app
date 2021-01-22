import React, { useEffect, useRef } from 'react';

export const ProjectModal = ({ showModal, setShowModal, name, poster, desc }) => {

    const modalRef = useRef(null);

    useEffect(() => {
            modalRef.current.style = "animation: ease-in 400ms ease-in forwards";
    }, []);
    
    const handleCloseModal = () => {
        modalRef.current.style = "animation: ease-out 400ms ease-out forwards";    
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
                <a target="_blank" rel="noreferrer" href="https://github.com/JosueVargasZ"> View project demo<i className="fas fa-external-link-alt"></i> </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/JosueVargasZ"> View source code<i className="fab fa-github"></i> </a>
                </div>
                <figure className="modal-body-img">
                    <img src={ poster } alt=""/>
                </figure>

            </div> 
        </div>
    )
}