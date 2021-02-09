import React from 'react';
import styles from './service-card.module.css';

interface ServiceCardProps {
	icon: string;
	title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => {
	return (
		<div className={styles.service}>
			<svg className={styles.service__icon}>
				<use href={`images/sprite.svg#${icon}`} />
			</svg>
			<div className={styles.service__title}>
				<h2>{title}</h2>
			</div>
			<div className={styles.service__info}>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
