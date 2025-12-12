import React from 'react';
// If you're using Material-UI v4
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
// If you're using MUI v5+, use the following imports instead:
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
import '../styles/footer.css';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='socialMedia'>
                <a 
                  href="https://www.linkedin.com/in/david-gazaryan-a7591217b"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                   <LinkedInIcon/>
                </a>
                <a 
                  href="https://github.com/davidgazaryan"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                   <GitHubIcon/>
                </a>
                <a 
                  href="mailto:david.gazaryan@baruchmail.cuny.edu"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Email"
                  title="Email"
                >
                   <EmailIcon/>
                </a>
            </div>
            <p>Copyright &copy; {year}. All rights reserved.</p>
        </footer>
    );
}
