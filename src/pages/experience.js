import React from 'react';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';




export const Experience = () => {
    return(

    <div className='experience' style={{fontFamily:'Poppins'}}>
        <VerticalTimeline lineColor='#2e2e2e' >
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2017 - 2021' iconStyle={{backgroundColor:'gray',color:'white'}}
            icon={<SchoolIcon/>}>
                <h3>BARUCH COLLEGE <p style={{fontStyle:'italic'}}>B.A. Mathematics</p></h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='September 2020 - December 2020' iconStyle={{backgroundColor:'grey',color:'white'}}
            icon={<WorkIcon/>}>
                <h3>STATISTA<p style={{fontStyle:'italic'}}>Market Research Intern</p></h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='February 2020 - May 2021' iconStyle={{backgroundColor:'gray',color:'white'}}
            icon={<WorkIcon/>}>
                <h3>50FIVE CAPITAL  <p style={{fontStyle:'Italic'}}>Derivatives Analyst</p></h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='January 2022 - Present' iconStyle={{backgroundColor:'gray',color:'white'}}
            icon={<WorkIcon/>}>
                <h3>OPENGYM <p style={{fontStyle:'italic'}}>Software Developer</p></h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>

)
};