import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../common/ThemeContext'
import Profil from '../../assets/Profil.jpg'


function Hero() {
    const {theme, toggleTheme}= useTheme()
    const themeIcon = theme === 'light' ? sun : moon

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero}
            src={heroImg} alt="" 
            />
            <img
             className={styles.colorMode}
             src={themeIcon} alt=""
             onClick={toggleTheme} 
             />
        </div>
        <div className={styles.info}>
            <h1> Prince <br />Natoyoum</h1>
            <h2>Full Stack Developper Junior</h2>
            <span>
                <a href="https://" target='_target'>
                    <img src={linkedIcon} alt="" />
                </a>
                <a href="https://" target='_target'>
                    <img src={githubIcon} alt="" />
                </a>
            </span>
            <p className={styles.description}>Passionné du developpement web et mobile</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero