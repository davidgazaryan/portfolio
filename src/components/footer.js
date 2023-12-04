import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/footer.css';

export const Footer = () => {
    return (
        <div className='footer' >
            <div className='socialMedia'>
                <a href="https://www.linkedin.com/in/david-gazaryan-a7591217b" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
                <a href="https://github.com/davidgazaryan" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
                <a href="mailto:david.gazaryan@baruchmail.cuny.edu" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
            </div>
            <p>Copyright &copy; 2023. All rights reserved.</p>
        </div>
    )
}