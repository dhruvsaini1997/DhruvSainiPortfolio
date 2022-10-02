import React, { useEffect } from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem';

const Timeline = (props) =>
    props.timelineData.length > 0 && (
        <>        
        <div className='row timelineClass d-flex justify-content-center' id='workEx' >
                <div className="header-center"><h3>Work Experience</h3></div>
            <div></div></div>
            <div className="timeline-container ">

                {props.timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div></>

    );

export default Timeline;