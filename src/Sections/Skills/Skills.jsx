import React from 'react';
import SkillBar from '../common/Skillbar';
import styles from './SkillsBar.module.css'

const skillsLan = [
  { name: 'HTML / CSS / Javascript' },
  { name: 'PHP'},
  { name: 'Python' },
  { name: 'Dart' },
  { name: 'SQL' }
];
const skillsFra = [
  { name: 'React Js' },
  { name: 'React Native' },
  { name: 'Laravel' },
  {name: 'Django' },
  { name: 'Express Js' },
  { name: 'Flutter' },
  { name: 'MySql' },
  { name: 'PostgreSql' },
  { name: 'Mongo DB' },
];

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 style={{textAlign:'center', marginBottom:'20px'}}>Compétences</h1>
      <h2 style={{textAlign:'center', marginBottom:'30px', margin:'20px'}}>Langages</h2>
      {skillsLan.map(skill => (
        <SkillBar key={skill.name} name={skill.name} />
      ))}

      <h2 style={{textAlign:'center', marginBottom:'30px', margin:'20px'}}>Frameworks et Bases de données</h2>
      {skillsFra.map(skill => (
        <SkillBar key={skill.name} name={skill.name} />
      ))}

    </section>
  );
}

export default Skills;
