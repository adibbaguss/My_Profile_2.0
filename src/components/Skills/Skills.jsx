import React from 'react';
import dataJson from '../../data/data.json';

function Skills() {
  return (
    <div>
      <p className="text-white text-center mb-2">Skills & Tools</p>

      {/* Konten untuk setiap slide */}
      <div className="flex flex-wrap">
        {dataJson.skills.map((skill, index) => (
          <img key={index} className="m-1 w-9" src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export default Skills;
