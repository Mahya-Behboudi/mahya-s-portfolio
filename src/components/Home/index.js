import React , {useState} from 'react';
import LogoTitle from '../../assets/images/mahyalogo.svg';
import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {
    const [letterClass,setLetterClass] =useState('text-animate');
    const nameArrey =
     return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi , <br/> I'm 
                <img src={LogoTitle} alt="developer"/>
                ahya
                <br/>
                web developer
                </h1>
                <h2>FrontEnd developer </h2>
                <Link to='/contact'     className='flat-button'> CONTACT ME</Link>
            </div>

        </div>
    );
};

export default Home;