import React, { useState } from 'react';
import { motion } from 'framer-motion';
import webgisPNG from '../../assets/Images/Portofolio/webgis ponpes.png';
import ParkingJPG from '../../assets/Images/Portofolio/smart parking.jpg';
import MovieAppPNG from '../../assets/Images/Portofolio/movieapp.png';
import TravelPNG from '../../assets/Images/Portofolio/landing page travel.png';
import DealerPNG from '../../assets/Images/Portofolio/landing page deler.png';

const projects = [
  {
    id: 1,
    title: 'Webgis Ponpes',
    description:
      'Developed a platform to map Islamic boarding schools (pondok pesantren) and religious schools (madrasah diniyah) in Batang Regency. The platform includes features such as mapping, reporting, and data management (CRUD). Users of the platform include System Admins (managing the entire system), Pondok Pesantren Admins (managing boarding school data), Madrasah Diniyah Admins (managing religious school data), and General Users (viewing data and making reports).',
    technologies: ['Laravel', 'PHP', 'HTML/CSS', 'Javascript', 'Bootstrap', 'LeafletJs', 'Cropper.js', 'Chart.js'],
    image: webgisPNG,
    github: 'https://github.com/adibbaguss/Webgis_Pesantren',
    category: 'Website',
  },
  {
    id: 2,
    title: 'Smart Parking (for course assignments)',
    description:
      'Developed a mobile application that allows users to view parking location conditions and easily perform check-in and check-out. This application was created in collaboration with a team of 2 people, where I served as the front-end developer. The application was made to fulfill the requirements of a mobile programming course assignment.',
    technologies: ['Java', 'XML', 'Google Maps API'],
    image: ParkingJPG,
    github: 'https://github.com/adibbaguss/PMOB-Aplikasi-Parkir-Pintar',
    category: 'Mobile',
  },
  {
    id: 3,
    title: 'Movie App (for course assignments)',
    description:
      'This application, which displays movie information, was created as an assignment for the "Mobile App Development with React Native" training (Progate) organized by Kominfo. The project was developed by a team of three members, utilizing CI/CD for collaboration.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'CSS3', 'TMDb API'],
    image: MovieAppPNG,
    github: 'https://github.com/adibbaguss/Proyek-MovieApp',
    category: 'Mobile',
  },
  {
    id: 4,
    title: 'Travel Service Landing Page (Dummy for Internship Task)',
    description: (
      <>
        <p className="text-sm">
          Design source :{' '}
          <a className="hover:underline font-semibold" href="https://dribbble.com/shots/16461003-Travelious-Travelling-Services-Landing-Page-Website">
            Adhiari Subekti
          </a>
          <br />
          Developed a web landing page showcasing comprehensive information about travel services using dummy data. This project was created for an internship task, demonstrating skills in modern technologies and responsive design.
        </p>
      </>
    ),

    technologies: ['CodeIgniter', 'Bootstrap', 'PHP', 'HTML/CSS', 'JavaScript'],
    image: TravelPNG,
    github: 'https://github.com/adibbaguss/landing_page_travel',
    category: 'Website',
  },
  {
    id: 5,
    title: 'Motor Vehicle Dealer Landing Page (Dummy for Internship Task)',
    description:
      'Developed a web landing page showcasing comprehensive information about a motor vehicle dealer using dummy data. This project was created for an internship task, demonstrating skills in modern technologies and responsive design.',
    technologies: ['CodeIgniter', 'Bootstrap', 'PHP', 'HTML/CSS', 'JavaScript'],
    image: DealerPNG,
    github: 'https://github.com/adibbaguss/landing_page_dealer',
    category: 'Website',
  },
];

function Project({ title, description, technologies, image, github }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-4 rounded-lg mb-4 overflow-hidden">
      <img src={image} alt={title} className="mb-2 rounded-lg w-full h-auto" style={{ maxHeight: '300px', objectFit: 'cover' }} loading="lazy" />
      <h3 className="text-lg font-bold text-primary-color mb-2">{title}</h3>
      <p className={`text-gray-700 mb-2 ${isExpanded ? '' : 'line-clamp-2'}`}>{description}</p>
      <button onClick={toggleDescription} className="text-blue-500 hover:underline">
        {isExpanded ? 'Show less' : 'Read more'}
      </button>
      <p className="text-sm mt-3 text-right">
        Github:{' '}
        {github ? (
          <a className="hover:underline " target="_blank" href={github}>
            Click Here
          </a>
        ) : (
          'Not available'
        )}
      </p>

      <div className="flex flex-wrap mt-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-primary-color text-green rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const uniqueCategories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

  return (
    <section className="bg-gray-100 p-6">
      <h1 className="font-bold text-1xl sm:text-2xl md:text-3xl lg:text-3xl mb-2 text-primary-color">Projects</h1>

      <div className="flex overflow-x-auto p-3 mb-4">
        {uniqueCategories.map((category, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 rounded-md mr-2 whitespace-nowrap 
            ${activeFilter === category ? 'bg-primary-color text-white' : 'border-solid border-2 border-primary-color text-primary-color'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects
          .filter((project) => activeFilter === 'All' || project.category === activeFilter)
          .map((project) => (
            <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies} image={project.image} github={project.github} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
