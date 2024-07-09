import React, { useState } from 'react';
import CustomModal from '../CustomModal/CustomModal';
import juniorWebDeveloper from '../../assets/Images/Certificates/Junior Web Developer.jpg';
import mobileDevelopment from '../../assets/Images/Certificates/mobile development.png';
import reactCertificate from '../../assets/Images/Certificates/react.png';
import javascriptCertificate from '../../assets/Images/Certificates/javascript.png';
import sqlCertificate from '../../assets/Images/Certificates/sql.png';
import gitCertificate from '../../assets/Images/Certificates/git.png';
import htmlCssCertificate from '../../assets/Images/Certificates/html & css.png';
import commandLineCertificate from '../../assets/Images/Certificates/command line.png';
import Masonry from 'react-masonry-css';
import './Certificates.css';

const certificates = [
  { id: 1, src: juniorWebDeveloper, alt: 'Certificate 1' },
  { id: 2, src: mobileDevelopment, alt: 'Certificate 2' },
  { id: 3, src: reactCertificate, alt: 'Certificate 3' },
  { id: 4, src: javascriptCertificate, alt: 'Certificate 1' },
  { id: 5, src: htmlCssCertificate, alt: 'Certificate 2' },
  { id: 6, src: sqlCertificate, alt: 'Certificate 3' },
  { id: 7, src: gitCertificate, alt: 'Certificate 3' },
  { id: 8, src: commandLineCertificate, alt: 'Certificate 3' },
];

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="p-5 overflow-hidden">
      <h1 className="font-bold text-1xl sm:text-2xl md:text-3xl lg:text-3xl mb-10 text-primary-color text-center">My Certificates</h1>
      <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {certificates.map((certificate) => (
          <img
            key={certificate.id}
            src={certificate.src}
            alt={certificate.alt}
            className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition-transform border border-solid  border-primary-color rounded-md   "
            onClick={() => openModal(certificate.src)}
            loading="lazy"
          />
        ))}
      </Masonry>
      {selectedImage && <CustomModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />}
    </section>
  );
};

export default Certificates;
