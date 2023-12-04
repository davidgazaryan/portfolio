import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

export const Condition1 = () => {
    return (
    <div className="p4">
        <div className='condition1' >
                        <p >Python</p>
                        <p >PyGame</p>
                        <p >NEAT</p>
        </div>
        <div className='condition3' >
        <h3>GitHub</h3>
        <a href="https://github.com/davidgazaryan/Python-Pong-Ai" target="_blank" rel="noopener noreferrer" ><GitHubIcon/></a>
       </div>
    </div>   
    )
};

export const Condition2 = () => {
    return (
    <div className="p4">
        <div className='condition2' >
                        <p >Django</p>
                        <p >Javascript</p>
                        <p >SQL</p>
        </div>
        <div className='condition4' >
        <h3>Live Site</h3>
        <a href="https://talkingturkey.onrender.com" target="_blank" rel="noopener noreferrer" ><OpenInBrowserIcon/></a>
       </div>
    </div>   
    )
};

export const Condition3 = () => {
    return (
    <div className="p4">
        <div className='condition5' >
                        <p >Python</p>
                        <p >PyGame</p>
        </div>
        <div className='condition6' >
        <h3>GitHub</h3>
        <a href="https://github.com/davidgazaryan/PyJump" target="_blank" rel="noopener noreferrer" ><GitHubIcon/></a>
       </div>
    </div>   
    )
};