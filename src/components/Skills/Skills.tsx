import React from 'react';

interface SkillsProps {
  skills?: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <ul>
      {skills?.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
};

export default Skills;
