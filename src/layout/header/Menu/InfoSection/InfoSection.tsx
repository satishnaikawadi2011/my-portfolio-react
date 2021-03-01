import React from 'react';
import Socialicons from '../../../../components/social-icons/Socialicons';
import styles from './InfoSection.module.css';
import logo from '../../logo-vector.svg';

const InfoSection = () => {
	return (
		<div className={styles.hero__section}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>
			<div className={styles.name}>
				<h1>Satish Naikawadi</h1>
			</div>
			<div className={styles.social__icons}>
				<Socialicons color="white" />
			</div>
		</div>
	);
};

export default InfoSection;
