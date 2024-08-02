import React from 'react'
import './Timeline.css'
import {ImLocation} from 'react-icons/im'

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <h2 className='title'>{data.title}</h2>
        <h5>
          <ImLocation color="#5DE31D" />
          {data.organization}, {data.location}
        </h5>
        <time>{data.date}</time>
        <ul className="responsibilitiesClass">
          {data.responsibilities.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <div className="skills">
          <p>{data.skills}</p>
        </div>
        <span className="circle" />
      </div>
    </div>
  );

export default TimelineItem;