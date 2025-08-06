import React from 'react';
import SkillBar from '../common/Skillbar';
import styles from '../common/Skillbar.module.css'

const skillsLan = [
  { name: 'HTML / CSS / Javascript', level: 60 },
  { name: 'PHP', level: 60},
  { name: 'Python', level: 30 },
  { name: 'Dart', level: 30 },
  { name: 'SQL', level: 60 }
];
const skillsFra = [
  { name: 'React Js', level: 70 },
  { name: 'React Native', level: 60 },
  { name: 'Laravel', level: 70 },
  { name: 'Express Js', level: 50 },
  { name: 'Flutter', level: 30 },
  { name: 'MySql', level: 50 },
  { name: 'PostgreSql', level: 50 },
  { name: 'Mongo DB', level: 50 },
];

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 style={{textAlign:'center', marginBottom:'20px'}}>Compétences</h1>
      <h2 style={{textAlign:'center', marginBottom:'30px', margin:'20px'}}>Langages</h2>
      {skillsLan.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}

      <h2 style={{textAlign:'center', marginBottom:'30px', margin:'20px'}}>Frameworks et Bases de données</h2>
      {skillsFra.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}

    </section>
  );
}

export default Skills;
