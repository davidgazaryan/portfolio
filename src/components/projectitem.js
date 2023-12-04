import React from 'react';
import {useNavigate} from 'react-router-dom';

export const ProjectItem = ({image,name, ids}) => {
    const navigate = useNavigate();

    return(
        <div style={{marginRight:''}} className='projectItem' onClick={() => {navigate('/project/' + ids)}}>
            <div className='bgImage' style={{backgroundImage:`url(${image})`}}/>
            <h1 style={{color:'#000',padding:'1rem'}}>{name}</h1>
        </div>



    )
}
