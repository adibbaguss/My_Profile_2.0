import React from 'react';
import SocialIcons from '../Social/SoscialIcon';

const Footer = () => {
  return (
    <footer className="bg-seconday-color text-primary-color py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-3">
          Made with <i className="fas fa-heart  hover:text-red"></i> by Adib Bagus Sudiyono
        </p>

        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
