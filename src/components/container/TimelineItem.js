import React from 'react'
import './Timeline.css'
import {ImLocation} from 'react-icons/im'

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <h2>{data.title}</h2>
            <h5><ImLocation color='#5DE31D'></ImLocation>{data.organization}, {data.location}</h5>
            <time>{data.date}</time><br/>
            <ul className='responsibilitiesClass'>
                {data.responsibilities.map(i => (
                    <li>
                        {i}
                    </li>
                ))}
            </ul>

            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;