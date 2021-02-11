import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './pagewrapper.module.css';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Switch from 'react-switch';

interface PageWrapperProps {
	title: string;
}

const pageVariant = {
	visible:
		{
			opacity: 1,
			transition: { delay: 0.2, duration: 0.2 }
		},
	hidden:
		{
			opacity: 0
		},
	exit:
		{
			x: '-100vw',
			transition: { eaase: 'easeInOut', when: 'beforeChildren' }
		}
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
	const [
		darkMode,
		setDarkMode
	] = useState<boolean>(true);

	const handleChangeTheme = (e: any) => {
		if (!darkMode) {
			document.documentElement.setAttribute('data-theme', 'dark');
			setDarkMode(true);
		}
		else {
			document.documentElement.setAttribute('data-theme', 'light');
			setDarkMode(false);
		}
	};
	return (
		<motion.div variants={pageVariant} initial="hidden" animate="visible" exit="exit">
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header />
			<div className={styles.content}>
				<div className={styles.themeToggleContainer}>
					<Switch onChange={handleChangeTheme} checked={darkMode} />
				</div>
				{children}
			</div>
			<Footer />
		</motion.div>
	);
};

export default PageWrapper;
