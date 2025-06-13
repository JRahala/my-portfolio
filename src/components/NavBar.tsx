import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/" className={styles.name}>Jasamrit Rahala</Link>
      </div>
      <ul className={styles.navList}>
        <li><Link to="/" className={styles.link}>About</Link></li>
        <li><Link to="/research-education" className={styles.link}>Research and Education</Link></li>
        <li><Link to="/projects" className={styles.link}>Projects</Link></li>
        <li><Link to="/experience" className={styles.link}>Experience</Link></li>
        <li><Link to="/awards-media" className={styles.link}>Awards & Media</Link></li>
        <li><Link to="/cv" className={styles.link}>CV</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
