import React from 'react';
import { Link } from 'react-scroll';

export const Footer = () => {
    
    return (
        <footer>
        <nav>
            <ul id="social-menu">
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/josue-vargas-zu%C3%B1iga-260681190/"> <i className="fab fa-linkedin-in"></i> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/josue.vargaszuniga.1"> <i className="fab fa-facebook-f"></i> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/josue_vargas_z/?fbclid=IwAR0lLIQm0XJeuuA_iPIY48iknvczGQVHmNSKC1OoVIoYDR5WIBgSKI8DwGw"> <i className="fab fa-instagram"></i> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/JosueVargasZ"> <i className="fab fa-github"></i> </a></li>
            </ul>
        </nav>
        <Link to="hero" id="arrow-home"> <i className="fas fa-chevron-up"></i> </Link>
        <h4><small>JOSUE VARGAS &copy;</small> 2020</h4>
    </footer>
    )
}
