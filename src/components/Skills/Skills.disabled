import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
const Skills = () => {
  // skills
  const skills = [
    { skillName: 'HTML/CSS', progress: 80 },
    { skillName: 'Javascript', progress: 60 },
    { skillName: 'PHP', progress: 80 },
    { skillName: 'SQL', progress: 60 },
    { skillName: 'Java', progress: 20 },
    { skillName: 'Bootstrapp', progress: 70 },
    { skillName: 'Tailwinds', progress: 50 },
    { skillName: 'Laravel', progress: 60 },
    { skillName: 'React', progress: 30 },
    { skillName: 'Photoshop', progress: 70 },
    { skillName: 'Corel Draw', progress: 80 },
    { skillName: 'Adobe Premiere', progress: 40 },
    // Tambahkan lebih banyak keterampilan sesuai kebutuhan
  ];
  return (
    <div>
      <h2 className="text-white font-bold text-1xl sm:text-1xl md:text-2xl lg:text-2xl mb-4">Skills</h2>
      <div className="grid xl:grid-cols-3  grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <ProgressBar key={index} skillName={skill.skillName} progress={skill.progress} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
