import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './pagewrapper.module.css';
import { Helmet } from 'react-helmet';

interface PageWrapperProps {
	title: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</React.Fragment>
	);
};

export default PageWrapper;
