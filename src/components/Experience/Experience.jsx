import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    type: 'bootcamp',
    date: '06 May 2024 – 06 July 2024 (2 Month)',
    title: 'Trainee of Mobile App Development with React Native (Progate)',
    subtitle: 'Digital Talent Scholarship - KOMINFO',
    description: (
      <>
        As a Trainee of Mobile App Development with React Native in the FGA program by Digital Talent Kominfo in collaboration with{' '}
        <a className="font-bold" href="https://progate.com" target="_blank" rel="noopener noreferrer">
          Progate
        </a>
        , I am learning the essential skills for building mobile apps using React Native. With guidance from industry experts, I am gaining practical knowledge to kickstart my career in this field.
      </>
    ),
    icon: 'fas fa-laptop', // Icon class
    background: '#11dd00',
    color: '#fff',
  },
  {
    type: 'work',
    date: '02 November 2022 – April 2023 (6 Month)',
    title: 'Student Employee',
    subtitle: 'Universitas Ahmad Dahlan, Yogyakarta, DIY',
    description: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>Handled administration and academic needs for students and faculty in the Vocational Teacher Education Master's Program.</li>
          <li>Updated information and implemented SEO on the program's website.</li>
        </ul>
      </>
    ),
    icon: 'fas fa-briefcase', // Icon class
    background: '#2196F3',
    color: '#fff',
  },
  {
    type: 'bootcamp',
    date: '20 September 2021 – 19 October 2021 (1 Month)',
    title: 'Trainee of Junior Web Developer',
    subtitle: 'Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi',
    description:
      'Completed an intensive training program focused on modern web technologies and development practices. Gained hands-on experience with HTML, CSS, JavaScript, PHP, MySQL, and Bootstrap. Worked on real-world projects to develop responsive and interactive web interfaces, enhancing both technical and teamwork skills.',
    icon: 'fas fa-laptop', // Icon class
    background: '#11dd00',
    color: '#fff',
  },
  {
    type: 'work',
    date: '02 July 2022 – 30 September 2022 (3 Month)',
    title: 'Front-end Developer (Internship)',
    subtitle: 'ARPATEAM, Bantul, DIY',
    description: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>Developed responsive user interfaces (UI) using HTML, CSS, JavaScript, and Bootstrap.</li>
          <li>Created and refined graphic assets, including icons, graphics, and background images.</li>
        </ul>
      </>
    ),
    icon: 'fas fa-briefcase', // Icon class
    background: '#2196F3',
    color: '#fff',
  },
].sort((a, b) => new Date(b.date.split(' – ')[0]) - new Date(a.date.split(' – ')[0]));

function Experience() {
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
            iconStyle={{ background: exp.background, color: exp.color, display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Center icon
            icon={<i className={`${exp.icon} my-auto mx-auto`}></i>}
          >
            <h4 className="vertical-timeline-element-title text-sm">{exp.title}</h4>
            <h4 className="vertical-timeline-element-subtitle font-semibold ">{exp.subtitle}</h4>
            <div className="text-bold">{typeof exp.description === 'string' ? <p>{exp.description}</p> : exp.description}</div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
