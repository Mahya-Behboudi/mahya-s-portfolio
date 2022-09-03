import React from 'react';
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from '../../assets/images/mahyalogo.svg';
import LogoSubtitle from '../../assets/images/logo_sub.png';
// icons
import Email from '../../assets/images/SvgLogos/emails.svg';
import Github from '../../assets/images/SvgLogos/github.svg';
import Linkedin from '../../assets/images/SvgLogos/linkedin.svg';
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
            <ul>
                <li>
                    <a target="_blank"
                     rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/mahyabehboudi/'>
                        <img src={Linkedin} alt="contact-icon" style={{width:'20px' , height:'20px'}}/>

                    </a>
                </li>
                <li>
                    <a target="_blank"
                     rel="noopener noreferrer"
                    href='https://github.com/Mahya-Behboudi?tab=repositories'
                    >
                        <img src={Github} alt="contact-icon" style={{width:'20px' , height:'20px'}}/>
                    </a>
                </li>
                <li>
                    <a target="_blank"
                     rel="noopener noreferrer"
                    href='view-source:https://mail.google.com/mail/u/0/?tab=wm#settings/accounts'>
                        <img src={Email} alt="contact-icon" style={{width:'20px' , height:'20px'}}/>
                            
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default index;