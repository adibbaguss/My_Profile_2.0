import React from 'react';

const SocialIcons = () => {
  return (
    <div className="items-center space-x-4">
      <a href="https://www.linkedin.com/in/adibbaguss/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-primary-color text-3xl hover:text-linkedin-blue"></i>
      </a>
      <a href="https://www.instagram.com/adibbagus_//" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-primary-color text-3xl hover:text-instagram-pink"></i>
      </a>
      <a href="https://github.com/adibbaguss" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github text-primary-color text-3xl hover:text-github-gray"></i>
      </a>
      <a href="https://t.me/adb_24" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-telegram text-primary-color text-3xl hover:text-telegram-blue"></i>
      </a>
      {/* Tambahkan ikon media sosial lainnya sesuai kebutuhan */}
    </div>
  );
};

export default SocialIcons;
