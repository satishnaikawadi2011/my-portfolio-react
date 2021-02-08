import React from 'react'
import styles from './header.module.css';

interface HeaderProps{

}



const Header: React.FC<HeaderProps> = () => {
    return (
        <React.Fragment>
            <nav className={styles.navbar}>
                <span className={styles.nav__logo}>
            <a href="/">
                <h2>Satish</h2>
            </a>
        </span>
        <div className={styles.nav__items}>
            <a href="/" className={styles.nav__link}> <svg className={styles.nav__link__icon}>
                    <use href="images/sprite.svg#icon-home"></use>
                </svg>Home</a>
            <div className={styles.divider}></div>
                <a href="about.html" className={styles.nav__link}><svg className={styles.nav__link__icon}>
                    <use href="images/sprite.svg#icon-info"></use>
                </svg>About</a>
            <div className={styles.divider}></div>
            <a href="projects.html" className={styles.nav__link}><svg className={styles.nav__link__icon}>
                    <use href="images/sprite.svg#icon-files-empty"></use>
                </svg>Projects</a>
            <div className={styles.divider}></div>
            <a href="contact.html" className={styles.nav__link}><svg className={styles.nav__link__icon}>
                    <use href="images/sprite.svg#icon-phone"></use>
                </svg>Contact</a>
        </div>
        <div id="menu__icon__container">
            <svg className={styles.nav__menu__icon} id="menu">
                <use href="images/sprite.svg#icon-menu"></use>
            </svg>
        </div> 
    </nav >
        </React.Fragment>
    );
}

export default Header
