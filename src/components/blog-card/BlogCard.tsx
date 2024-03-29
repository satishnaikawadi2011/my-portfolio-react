import { motion } from 'framer-motion';
import React from 'react';
import { cardVariant } from '../../utils/variants';
import styles from './blog-card.module.css';
import Rosa from 'react-on-scroll-animation';
import { Link } from 'react-router-dom';
import Tag from '../tag/Tag';

interface BlogCardProps {
	image: string;
	title: string;
	tags: string[];
	createdAt: string;
	id: string;
	readingTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, tags, createdAt, children, id, readingTime }) => {
	return (
		<motion.div variants={cardVariant} initial="hidden" animate="visible" className={styles.blog__card}>
			<Rosa animation="flip-left">
				<div className={styles.blog__img__container}>
					<img src={image} alt={title} className={styles.blog__image} />
					<span className={styles.blog__createdAt__badge}>{createdAt}</span>
				</div>
				<div className={styles.blog__card__body}>
					<Link to={`/posts/${id}`}>
						<h2 className={styles.blog__title}>{title}</h2>
					</Link>
					<p className={styles.blog__description}>{children}</p>
					<div className={styles.blog__tags__container}>
						{tags.slice(0, 3).map((tagName) => {
							return <Tag tagName={tagName} />;
						})}
					</div>
					<strong className={styles.reading__time}>&bull; {readingTime}</strong>
				</div>
			</Rosa>
		</motion.div>
	);
};

export default BlogCard;
