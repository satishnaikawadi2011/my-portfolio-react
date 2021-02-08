import React, { useEffect, useRef } from 'react'
import styles from './header.module.css';

interface HeaderProps{

}


const Header: React.FC<HeaderProps> = () => {


    const navItems = useRef<HTMLDivElement | null>(null);
    const navbar = useRef<HTMLElement | null>(null);
    const x = window.matchMedia('(min-width: 992px)');
    useEffect(() => {
        	if (x.matches) {
		navbar.current!.style.height = '4rem';
		navItems.current!.style.display = 'flex';
	}
    }, [x.matches,navItems,navbar])
    
    const navToggleHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        		if (navItems.current!.style.display !== 'none') {
			navItems.current!.style.display = 'none';
			navbar.current!.style.height = '4rem';
		}
		else {
			navItems.current!.style.display = 'flex';
			navbar.current!.style.height = '22rem';
		}
    }

    return (
        <React.Fragment>
            <nav ref={navbar} className={styles.navbar} id="navbar">
                <span className={styles.nav__logo}>
            <a href="/">
                <h2>Satish</h2>
            </a>
        </span>
        <div ref={navItems} className={styles.nav__items} id="nav-items">
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
        <div id="menu__icon__container" onClick={navToggleHandler}>
            <svg className={styles.nav__menu__icon} id="menu">
                <use href="images/sprite.svg#icon-menu"></use>
            </svg>
        </div> 
    </nav >
        </React.Fragment>
    );
}

export default Header
