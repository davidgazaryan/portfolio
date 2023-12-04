import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/home.css';
import {DiPython} from 'react-icons/di';
import {DiMysql} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {DiJsBadge} from 'react-icons/di';
import {DiDjango} from 'react-icons/di';
import { SiTypescript } from "react-icons/si";
import photoid from '../photos/photoid.png';

export const Home = () => {
    return (


 <div className='home'>
  <div className='about'>
    <div className='details'>
      <h1>Full Stack Developer</h1>
      <p>Hello, I am David Gazaryan. I have a passion for software development along with experience using Front-end/Back-end frameworks. Based in New York, New York.</p>
      <div className='icons'>
        <a  href="https://www.linkedin.com/in/david-gazaryan-a7591217b" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{  fontSize: '40px' }} />
        </a>
        <a  href="https://github.com/davidgazaryan" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{  fontSize: '40px' }}  />
        </a>
        <a  href="mailto:david.gazaryan@baruchmail.cuny.edu" target="_blank" rel="noopener noreferrer">
          <EmailIcon style={{  fontSize: '40px' }} />
        </a>
      </div>
    </div>
      <div className='tech'>
        <h3>Tech Stack</h3>
        <div>
          <ul>
            <li><SiTypescript size={50}/></li>
            <li><DiJsBadge size={50} /></li>
            <li><DiPython size={50} /></li>
            <li><DiDjango size={50} /></li>
            <li><DiReact size={50} /></li>
            <li><DiMysql size={50} /></li>
          </ul>
        </div>
      </div>


    <div className='photo'>
      <img src={photoid} alt="" />
    </div>
  </div>
</div>

    )
}