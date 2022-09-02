import React from 'react';
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
// icons
// import Home from '../../assets/images/SvgLogos/Home.svg';
// import User from '../../assets/images/SvgLogos/user.svg';
// import Envelope from '../../assets/images/SvgLogos/envelope.svg';
import  { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope , faHome , faUser} from '@fortawesome/free-solid-svg-icons';

const index = () => {
    return (
        <div className='nav-bar'>
            <Link className='Logo' to="/">
                <img src={LogoS}   alt="Logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="logoSubtitle"/>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' className='' to="/">
                    <FontAwesomeIcon icon={faHome} alt='home'/>
                </NavLink>
                <NavLink 
                exact='true'
      
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} alt='User'/>
                </NavLink>
                <NavLink 
                exact='true' 
            
                className='contact-link'
                to="/contact">
         
                     <FontAwesomeIcon icon={faEnvelope} alt='Envelope'/>
                </NavLink>
            </nav>
            
        </div>
    );
};

export default index;