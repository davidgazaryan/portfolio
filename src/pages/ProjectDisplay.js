import React from 'react';
import {useParams} from 'react-router-dom';
import {projectList} from '../components/projectlist';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import "../styles/projectdisplay.css";
import { Condition1,Condition2,Condition3 } from '../components/conditions';

const ConditionChecker = (projectname) => {
    switch (projectname.name) {
        case 'AI Pong': return <Condition1/>
        case 'Personal Blog': return <Condition2/>
        case 'PyJump': return <Condition3/>
    }
}; 

export const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id];


    return(
        <div className='project' style={{}}>
            <div className='p1'>
                <div className='p2' >
                    <img src={project.image} />
                </div>
                <div className='p3' >
                    <h3 >{project.name} {project.name==='AI Pong'? <span role='img'>&#x1f3d3;</span> : project.name === 'Personal Blog' ? <span role='img'>&#x1f4dd;</span> : 
                    <span role='img'>&#x1F3AE;</span>}</h3>
                    <p >{project.description}.</p>


                    {ConditionChecker(project)}

                </div>
            </div>

        </div>
    );
}