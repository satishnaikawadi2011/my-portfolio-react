import React, { useRef } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<React.Fragment>
			<nav className={styles.navbar} id="navbar">
				<span className={styles.nav__logo}>
					<Link to="/">
						<h2>Satish</h2>
					</Link>
				</span>
				<Menu />
			</nav>
		</React.Fragment>
	);
};

export default Header;
