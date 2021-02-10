import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './pagewrapper.module.css';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
interface PageWrapperProps {
	title: string;
}

const pageVariant = {
	visible:
		{
			width: '100vw',
			opacity: 1
		},
	hidden:
		{
			width: 0,
			opacity: 0
		}
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
	return (
		<motion.div variants={pageVariant} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</motion.div>
	);
};

export default PageWrapper;
