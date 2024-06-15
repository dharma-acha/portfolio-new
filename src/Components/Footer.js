import React from 'react';
import {FaGithub, FaLinkedin,} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';




const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h4>Developed by <b>Dharma Acha</b></h4>
            <h4><b>Copyright</b> &copy; {year} DA </h4>
            <div className='footerLinks'>
                <a href="https://github.com/dharma-acha" target='_blank' rel="noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/dharma-acha-8b5876202/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
                <a href='mailTo:achadharma333@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
            </div>
        </footer>
    );
};

export default Footer;
