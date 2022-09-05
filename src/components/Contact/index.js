import './index.scss';
import React ,{useRef, useState} from 'react';
import AnimatedLetters from '../AnimatedLedLetters';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [letterClass,setLetterClass] =useState('text-animate');
    const refForm = useRef()


    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_0hi7tkl','template_cfueaxd',refForm.current,'iOc_ucN7VS-EAJzb0'
        )
        .then(() => {
           alert('Message successfully')
           window.location.reload(false);
        }, () => {
            alert('Faild to send message , please try again')
        });

    };
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>

                        <AnimatedLetters
                        letterClass={letterClass}  
                        strArray={['C','O','N','T','A','C','T','   ',' ' ,  'M','E']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in team-work opportunities  - especially ambitious on large projects -However , if you have other request or questions , don't hesitate to contact me using below from either
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                
                </div>   
        </>
    );
};

export default Contact;