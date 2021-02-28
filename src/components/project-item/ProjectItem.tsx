import React from 'react';
import styles from './project-item.module.css';
import { motion } from 'framer-motion';
import { cardVariant } from '../../utils/variants';
import Rosa from 'react-on-scroll-animation';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
					<div className={styles.project__icon__container}>
						<Link to="#">
							<svg className={styles.project__icon}>
								<use href="images/sprite.svg#icon-eye" />
							</svg>
						</Link>
						<Link to="#">
							<FaGithub className={styles.project__icon} />
						</Link>
					</div>
				</div>
				<h2 className={styles.project__title}>{title}</h2>
				<p className={styles.project__category}>{category}</p>
			</Rosa>
		</motion.div>
	);
};

export default ProjectItem;
