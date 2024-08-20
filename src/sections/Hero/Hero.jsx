import styles from './HeroStyles.module.css';
import heroImg from '../../assets/76411904-modified.png';
//import heroImg from '../../assets/hd-face-cartoon-modified.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
//import twitterLight from '../../assets/twitter-light.svg';
//import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV - Joel Sigüenza 2024.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  //const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramDark : instagramLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Joel Santiago
          <br />
          Sigüenza Castañeda
        </h1>
        <h2>Backend Developer</h2>
        <span>
          <a href="https://www.instagram.com/joel.siguenza_/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/jsiguenzac" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/jsiguenzac/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Técnico en Computación e Informática enfocado en desarrollo e innovación, 
        buscando integrarse en una organización para aplicar sus habilidades, demostrar su experiencia y seguir creciendo profesionalmente.
        </p>
        <a href={CV} download>
          <button className="hover">Curriculum Vitae</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
