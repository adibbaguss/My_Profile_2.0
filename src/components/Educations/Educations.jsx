import { motion } from 'framer-motion';
import EducationPNG from '../../assets/Images/Educations/educations.png';

const Educations = () => {
  // Array untuk menyimpan elemen gambar
  const educationImages = [];
  const maxImages = 20; // Jumlah maksimal gambar

  // Loop untuk membuat elemen gambar dengan kelas opasitas yang berubah-ubah
  for (let i = 0; i < maxImages; i++) {
    const opacityClass = i % 2 === 0 ? 'opacity-20' : 'opacity-30';
    educationImages.push(<img key={i} className={`mb-5 ${opacityClass}`} src={EducationPNG} alt={`Education ${i}`} />);
  }

  return (
    <section className="bg-primary-color py-10 relative lg:h-screen overflow-hidden">
      <div className="img absolute top-0 left-0 w-full h-full overflow-hidden" style={{ pointerEvents: 'none' }}>
        {educationImages} {/* Render semua elemen gambar di sini */}
      </div>

      <div className="max-w-4xl mx-auto px-10 relative z-10 my-auto">
        <h1 className="font-bold text-1xl sm:text-2xl md:text-3xl lg:text-3xl mb-10 text-secondary-color text-center">Educations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EducationItem schoolName="Universitas Ahmad Dahlan" degree="Bachelor of Informatics" location="Yogyakarta, Special Region of Yogyakarta" duration="Sep 2019 – Mar 2024" achievements="" gpa="GPA: 3.72" />
          <EducationItem
            schoolName="SMK Diponegoro Banyuputih"
            degree="Computer and Network Engineering"
            location="Batang, Central Java"
            duration="Jul 2016 – May 2019"
            achievements={['Chief of Scout (Pradana) SMK Diponegoro Banyuputih, 2017 – 2018', 'Ranked 2nd as the best graduate in Computer and Network Engineering at SMK Diponegoro Banyuputih']}
          />
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ schoolName, degree, location, duration, achievements, gpa }) => {
  return (
    <motion.div className="bg-green rounded-md shadow-md" whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', paddingBottom: 10 }} whileTap={{ scale: 0.95 }}>
      <div className="bg-white p-6 rounded-lg h-full">
        <h3 className="text-lg font-bold text-gray-800">{schoolName}</h3>
        <p className="text-gray-600 mb-2">{degree}</p>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-600 mb-2">{duration}</p>
        {achievements && (
          <ul className="list-disc ml-6 mb-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">
                {achievement}
              </li>
            ))}
          </ul>
        )}
        {gpa && <p className="text-gray-600 mb-2">{gpa}</p>}
      </div>
    </motion.div>
  );
};

export default Educations;
