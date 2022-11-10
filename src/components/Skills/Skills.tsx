import React, { useState } from 'react';

interface SkillsProps {
  skills?: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul>
        {skills?.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <button>{`${isLoggedIn}`}</button>
      <button onClick={() => setIsLoggedIn((state) => !state)}>toggle</button>
    </>
  );
};

export default Skills;
