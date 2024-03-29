import React, { useRef } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';
import logo from './logo-vector.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<React.Fragment>
			<nav className={styles.navbar} id="navbar">
				<span className={styles.nav__logo}>
					<Link to="/" className={styles.logo__header}>
						<img src={logo} alt="logo" className={styles.logo} />
						<h2>Satish</h2>
					</Link>
				</span>
				<Menu />
			</nav>
		</React.Fragment>
	);
};

export default Header;
