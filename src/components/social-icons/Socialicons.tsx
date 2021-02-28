import React from 'react';
import styles from './social-icons.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface SocialIconsProps {
	color?: string;
}

const Socialicons: React.FC<SocialIconsProps> = ({ color = 'var(--primaryText)' }) => {
	return (
		<div className={styles.social__icons}>
			<FaFacebookF
				className={styles.social__icon}
				style={{ fill: color, border: `3px solid ${color}` }}
				fill={color}
				color={color}
			/>
			<FaInstagram
				className={styles.social__icon}
				style={{ fill: color, border: `3px solid ${color}` }}
				fill={color}
				color={color}
			/>
			<FaLinkedinIn
				className={styles.social__icon}
				style={{ fill: color, border: `3px solid ${color}` }}
				fill={color}
				color={color}
			/>
			<FaTwitter
				className={styles.social__icon}
				style={{ fill: color, border: `3px solid ${color}` }}
				fill={color}
				color={color}
			/>
		</div>
	);
};

export default Socialicons;
