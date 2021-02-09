import React, { useRef } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const navItems = useRef<HTMLDivElement | null>(null);
	const navbar = useRef<HTMLElement | null>(null);

	const navToggleHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (navItems.current!.style.display !== 'none') {
			navItems.current!.style.display = 'none';
			navbar.current!.style.height = '4rem';
		}
		else {
			navItems.current!.style.display = 'flex';
			navbar.current!.style.height = '22rem';
		}
	};

	return (
		<React.Fragment>
			<nav ref={navbar} className={styles.navbar} id="navbar">
				<span className={styles.nav__logo}>
					<Link to="/">
						<h2>Satish</h2>
					</Link>
				</span>
				<div ref={navItems} className={styles.nav__items} id="nav-items">
					<Link to="/" className={styles.nav__link}>
						{' '}
						<svg className={styles.nav__link__icon}>
							<use href="images/sprite.svg#icon-home" />
						</svg>Home
					</Link>
					<div className={styles.divider} />
					<Link to="/about" className={styles.nav__link}>
						<svg className={styles.nav__link__icon}>
							<use href="images/sprite.svg#icon-info" />
						</svg>About
					</Link>
					<div className={styles.divider} />
					<Link to="projects" className={styles.nav__link}>
						<svg className={styles.nav__link__icon}>
							<use href="images/sprite.svg#icon-files-empty" />
						</svg>Projects
					</Link>
					<div className={styles.divider} />
					<Link to="/contact" className={styles.nav__link}>
						<svg className={styles.nav__link__icon}>
							<use href="images/sprite.svg#icon-phone" />
						</svg>Contact
					</Link>
				</div>
				<div id="menu__icon__container" onClick={navToggleHandler}>
					<svg className={styles.nav__menu__icon} id="menu">
						<use href="images/sprite.svg#icon-menu" />
					</svg>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Header;
