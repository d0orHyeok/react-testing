import React, { useEffect, useState } from 'react';

interface SkillsProps {
  skills?: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [promise, setPromise] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPromise(true);
    }, 500);
  }, []);

  return (
    <>
      <ul>
        {skills?.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <div>
        <button>{`${isLoggedIn}`}</button>
        {promise ? <button>promise</button> : null}
      </div>
      <button onClick={() => setIsLoggedIn((state) => !state)}>toggle</button>
    </>
  );
};

export default Skills;
