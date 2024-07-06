import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Project';
import Educations from './components/Educations/Educations';
// import Social from './components/Social/Sosial';
import Certificates from './components/Certificates/Certificates';
import { Contact } from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); // Added empty dependency array to useEffect

  return (
    <div>
      {/* <Header /> */}
      <Hero />

      <div data-aos="fade-up" data-aos-duration="1200">
        <About />
        <Experience />
        <Projects />
        <Educations />
        <Certificates />

        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import About from './components/About/About';
// import Experience from './components/Experience/Experience';
// import Projects from './components/Projects/Project';
// import Educations from './components/Educations/Educations';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function App() {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setReady(true);
//       AOS.init({ once: true }); // Initialize AOS once
//       AOS.refresh();
//     }, 1600); // Adjusted setTimeout duration for demonstration
//   }, []);

//   useEffect(() => {
//     // Disable right-click context menu
//     const disableRightClick = (e) => {
//       e.preventDefault();
//     };

//     document.addEventListener('contextmenu', disableRightClick);

//     return () => {
//       document.removeEventListener('contextmenu', disableRightClick);
//     };
//   }, []);

//   return (
//     <div>
//       {/* <Header /> */}
//       <Hero />
//       {ready ? (
//         <div data-aos="fade-up">
//           <About />
//           <Experience />
//           <Projects />
//           <Educations />
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default App;
