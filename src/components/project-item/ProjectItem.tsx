import React from 'react';
import styles from './project-item.module.css';
import { motion } from 'framer-motion';
import { cardVariant } from '../../utils/variants';
import Rosa from 'react-on-scroll-animation';

interface ProjectItemProps {
	image: string;
	title: string;
	category: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ image, title, category }) => {
	return (
		<motion.div variants={cardVariant} initial="hidden" animate="visible" className={styles.project}>
			<Rosa animation="flip-right">
				<div className={styles.project__img__container}>
					<img src={`images/${image}.jpg`} alt={title} className={styles.project__image} />
					<svg className={styles.project__icon}>
						<use href="images/sprite.svg#icon-eye" />
					</svg>
				</div>
				<h2 className={styles.project__title}>{title}</h2>
				<p className={styles.project__category}>{category}</p>
			</Rosa>
		</motion.div>
	);
};

export default ProjectItem;
