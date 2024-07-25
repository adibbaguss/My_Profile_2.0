import React from 'react';
import dataJson from '../../data/data.json';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = dataJson.experience.sort((a, b) => new Date(b.date.split(' – ')[0]) - new Date(a.date.split(' – ')[0]));

  return (
    <section className="overflow-hidden bg-primary-color">
      <h1 className="font-bold text-1xl sm:text-2xl md:text-3xl lg:text-3xl mb-2 text-white text-center my-5">Experience</h1>
      <VerticalTimeline className="custom-vertical-timeline">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${exp.type}`}
            contentStyle={{ background: exp.background, color: exp.color }}
            contentArrowStyle={{ borderRight: `7px solid ${exp.background}` }}
            date={exp.date}
            iconStyle={{ background: exp.background, color: exp.color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={<i className={`${exp.icon} my-auto mx-auto`}></i>}
          >
            <h4 className="vertical-timeline-element-title text-sm">{exp.title}</h4>
            <h4 className="vertical-timeline-element-subtitle font-semibold">{exp.subtitle}</h4>
            <div className="text-bold" dangerouslySetInnerHTML={{ __html: exp.description }}></div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
