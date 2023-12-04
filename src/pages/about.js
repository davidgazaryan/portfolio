import React from "react";
import { useState, useEffect } from "react";
import '../styles/about.css';

export const About = () => {
    const [width,setWidth] = useState(window.innerWidth)

    useEffect (() => {
        const setScreenSize =  () => {
         setWidth(window.innerWidth);
    };
        window.addEventListener('resize',setScreenSize)

        return () => window.removeEventListener('resize',setScreenSize)
    },[])

    return(
        <div className="aboutsection">
            <h1>ABOUT ME <span  role="img">&#x1F44B;</span></h1>
           <div className="aboutcontainer"> 
            <div className="professional">
                <h4>PROFESSIONAL</h4>    
                <p>
                    Alumnus of Baruch College with a B.A. in Mathematics. I have experience 
                    working in the financial services industry as I was previously employed
                    as a Derivatives Analyst, working with options, futures, and swaps. Currently, I work as a software developer at OpenGym,
                    a company that aims to bridge the gap between gyms and athletes by streamlining
                    the process of finding and booking sessions at a moment's notice. A lot of my current work
                    revolves around testing/updating the software to best meet our clients needs.
                </p>
            </div>    
            <div className="personal">
                <h4>PERSONAL</h4>
                <p>
                    In my free time, I enjoy both watching and playing sports. At the moment, I am trying
                    to get back into boxing, something I did for many years as a child, and it's quite the 
                    humbling experience I must say. Feel free to shoot any piece of advice my way, I'm
                    always looking to improve! Aside from that, I do also enjoy less strenuous activites. Two of
                    my favorite things to do are play chess and learn new languages. Spanish is the current one on my list, 
                    so I'm always down for some music recommendations. 
                </p>
            </div>
            </div>
            <div className="contactcontainer">
                <div>
                    <h3>Contact Me {width > 840 ? <span role='img'>&#x1F449;</span> : <span>&#x1F447;</span>}</h3>
                </div>
                <div>
                    <a className="linkedina" href="https://www.linkedin.com/in/david-gazaryan-a7591217b" target="_blank" rel="noopener noreferrer">LinkedIn</a>    
                    <a href="mailto:david.gazaryan@baruchmail.cuny.edu" target="_blank" rel="noopener noreferrer">david.gazaryan@baruchmail.cuny.edu</a>
                </div>
                
            </div>
        </div>
    )

}