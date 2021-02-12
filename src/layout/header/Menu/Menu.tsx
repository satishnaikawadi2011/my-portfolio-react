import React, { useState } from 'react';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';
import TileSection from './TileSection/TileSection';
import InfoSection from './InfoSection/InfoSection';

const Menu = () => {
	const navVariants = {
		open:
			{
				y: 0,
				scale: 1,
				transition:
					{
						duration: 0.8,
						ease:
							[
								0.65,
								0,
								0.35,
								1
							],
						when: 'beforeChildren'
					}
			},
		closed:
			{
				y: '100%',
				scale: 0.8,
				transition:
					{
						duration: 0.5,
						ease:
							[
								0.5,
								0,
								0.75,
								0
							]
					}
			}
	};

	const [
		isMenuOpen,
		setIsMenuOpen
	] = useState(false);
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<React.Fragment>
			<div className={styles.menuButton}>
				{
					!isMenuOpen ? <svg className={styles.menuIcon} onClick={() => setIsMenuOpen(true)}>
						<use href="images/sprite.svg#icon-menu" />
					</svg> :
					<svg
						version="1.1"
						className={styles.menuIcon}
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => setIsMenuOpen(false)}
					>
						<title>close</title>
						<path
							fill="#ffffff"
							d="M32 2.393l-2.393-2.393-13.607 13.607-13.607-13.607-2.393 2.393 13.607 13.607-13.607 13.607 2.393 2.393 13.607-13.607 13.607 13.607 2.393-2.392-13.607-13.607z"
						/>
					</svg>}
			</div>
			<motion.nav
				className={styles.navbar__container}
				initial="closed"
				variants={navVariants}
				animate={

						isMenuOpen ? 'open' :
						'closed'
				}
			>
				<TileSection closeMenu={closeMenu} />
				<InfoSection />
			</motion.nav>
		</React.Fragment>
	);
};

export default Menu;
