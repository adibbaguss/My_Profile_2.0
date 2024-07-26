import React from 'react';
import { motion } from 'framer-motion';
import EducationPNG from '../../assets/Images/Educations/educations.png';
import dataJson from '../../data/data.json'; // Import data JSON

const Educations = () => {
  // Array untuk menyimpan elemen gambar
  const educationImages = [];
  const maxImages = 20; // Jumlah maksimal gambar

  // Loop untuk membuat elemen gambar dengan kelas opasitas yang berubah-ubah
  for (let i = 0; i < maxImages; i++) {
    const opacityClass = i % 2 === 0 ? 'opacity-20' : 'opacity-30';
    educationImages.push(<img key={i} className={`mb-5 ${opacityClass}`} src={EducationPNG} alt={`Education ${i}`} />);
  }

  // Mengambil data pendidikan dari dataJson
  const educations = dataJson.educations;

  return (
    <section className="bg-primary-color py-10 relative lg:h-screen overflow-hidden">
      <div className="img absolute top-0 left-0 w-full h-full overflow-hidden" style={{ pointerEvents: 'none' }}>
        {educationImages} {/* Render semua elemen gambar di sini */}
      </div>

      <div className="max-w-4xl mx-auto px-10 relative z-10 my-auto">
        <h1 className="font-bold text-1xl sm:text-2xl md:text-3xl lg:text-3xl mb-10 text-secondary-color text-center">Educations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education, index) => (
            <EducationItem key={index} schoolName={education.schoolName} degree={education.degree} location={education.location} duration={education.duration} achievements={education.achievements} gpa={education.gpa} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ schoolName, degree, location, duration, achievements, gpa }) => {
  return (
    <motion.div className="bg-green rounded-md shadow-md" whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', paddingBottom: 10 }} whileTap={{ scale: 0.95 }}>
      <div className="bg-white p-6 rounded-lg h-full">
        <h2 className="text-base lg:text-lg font-bold text-gray-800">{schoolName}</h2>
        <p className="text-gray-600 mb-2 text-sm lg:text-base">{degree}</p>
        <p className="text-gray-600 mb-2 text-sm lg:text-base">{location}</p>
        <p className="text-gray-600 mb-2 text-sm lg:text-base">{duration}</p>
        {achievements && achievements.length > 0 && (
          <ul className="list-disc ml-6 mb-4 text-sm lg:text-base">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">
                {achievement}
              </li>
            ))}
          </ul>
        )}
        {gpa && <p className="text-gray-600 mb-2 text-sm lg:text-base">{gpa}</p>}
      </div>
    </motion.div>
  );
};

export default Educations;
