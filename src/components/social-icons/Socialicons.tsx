import React from 'react';
import styles from './social-icons.module.css';

interface SocialIconsProps {
	color?: string;
}

const Socialicons: React.FC<SocialIconsProps> = ({ color }) => {
	return (
		<div className={styles.social__icons}>
			<svg className={styles.social__icon} style={{ fill: color }}>
				<use href="images/sprite.svg#icon-facebook" />
			</svg>
			<svg className={styles.social__icon} style={{ fill: color }}>
				<use href="images/sprite.svg#icon-instagram" />
			</svg>
			<svg className={styles.social__icon} style={{ fill: color }}>
				<use href="images/sprite.svg#icon-twitter" />
			</svg>
			<svg className={styles.social__icon} style={{ fill: color }}>
				<use href="images/sprite.svg#icon-linkedin2" />
			</svg>
		</div>
	);
};

export default Socialicons;
