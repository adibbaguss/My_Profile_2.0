import React, { useEffect } from 'react';
import heroText1 from '../../assets/Images/Hero/text-hero-1.png';
import heroText2 from '../../assets/Images/Hero/text-hero-2.png';
import avatar from '../../assets/Images/Hero/avatar.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Hero.css';
import Weather from '../Weather/Weather';
import { motion } from 'framer-motion';

function Hero() {
  //   aos animate
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="lg:h-screen bg-primary-color  text-secondary-color  items-center justify-center overflow-hidden">
      <div className="w-full px-2 ">
        <Weather />
      </div>
      <div className="lg:absolute lg:bottom-0 relative mt-1">
        <img src={heroText1} alt="Hero text-1" className="px-2 pb-4" data-aos="fade-up" data-aos-duration="1000" />
        <img src={heroText1} alt="Hero text-1" className="px-2 pb-4" data-aos="fade-up" data-aos-duration="800" />
        {/* <img src={heroText1} alt="Hero text-1" className="pb-4" /> */}
        <img src={heroText1} alt="Hero text-1" className="px-2 pb-9" data-aos="fade-up" data-aos-duration="600" />
        <div className="w-full absolute bottom-0 h-full lg:h-screen overflow-hidden" data-aos="zoom-in-up" data-aos-duration="800">
          <motion.img src={avatar} alt="avatar" className="h-full mx-auto " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} />
        </div>

        <div className="absolute bottom-0  w-full h-40" data-aos="fade-up" data-aos-duration="1200">
          <p className="w-full absolute bottom-0 pb-1 font-bold text-center lg:text-3xl md:text-2xl sm:text-1xl">Full-Stack Developer</p>
        </div>

        <img src={heroText2} alt="Hero text-2" className="absolute bottom-0 px-2 pb-9" data-aos="fade-up" data-aos-duration="600" />
        {/* Full-Stack Developer text */}
      </div>
    </section>
  );
}

export default Hero;
