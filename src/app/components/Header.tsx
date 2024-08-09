import React from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <h1 className={styles.title}>SAHIL MALVIYA</h1>
      <ul className={styles.navList}>
        <li><a href="#about" className={styles.navItem}>About</a></li>
        <li><a href="#projects" className={styles.navItem}>Projects</a></li>
        <li><a href="#skills" className={styles.navItem}>Skills</a></li>
        <li><a href="#contact" className={styles.navItem}>Contact</a></li>
        <ThemeToggle />
      </ul>
    </nav>
  </header>
);

export default Header;
