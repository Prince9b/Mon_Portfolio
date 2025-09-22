import React from 'react';
import styles from './SkillBare.module.css';

function SkillBar({ name, level }) {
  return (
    <div className={styles.skill}>
      <span className={styles.label}>{name}</span>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className={styles.percent}>{level}%</span>
    </div>
  );
}

export default SkillBar;
