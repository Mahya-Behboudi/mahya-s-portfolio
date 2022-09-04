import './index.scss';
import React from 'react';
import AnimatedLetters from '../AnimatedLedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact , faHtml5 ,faCss3 ,fa, faJsSquare, faGit ,faPython} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                     strArray={['A','B','O','U','T', ' ' , 'M','E']}
                     idx={15}
                    />
                </h1>
                <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident,  curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a curious Girl,a sports fanatic!!!

        </p>
            </div>
            <div className='stage-cube-con'>
                <div className='cubspinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGit} color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#306998"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;