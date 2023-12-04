import React from 'react';
import {ProjectItem} from '../components/projectitem';
import '../styles/projects.css';
import {projectList} from '../components/projectlist';
import { useState, useEffect } from 'react';


export const Projects = () => {


    return(
        <div className='projects'>
            <h1>PROJECTS <span role='img'>	&#x1F4BB;</span></h1>
            <div className='projectList'>
                {projectList.map((project) => {
                return <ProjectItem ids={projectList.indexOf(project)} name={project.name} image={project.image}/>}
                )}


            </div>
            
        </div>


    )
}