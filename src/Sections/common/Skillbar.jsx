import React from 'react';
import styles from './SkillBare.module.css';

function SkillBar({ name}) {
  return (
    <div className={styles.skill}>
      <span className={styles.label}>{name}</span>
    </div>
  );
}

export default SkillBar;
