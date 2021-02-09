import React from 'react';
import styles from './blog-card.module.css';

interface BlogCardProps {
	image: string;
	title: string;
	tags: string[];
	createdAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, tags, createdAt, children }) => {
	return (
		<div className={styles.blog__card}>
			<div className={styles.blog__img__container}>
				<img src={`images/${image}.jpg`} alt={title} className={styles.blog__image} />
				<span className={styles.blog__createdAt__badge}>{createdAt}</span>
			</div>
			<div className={styles.blog__card__body}>
				<h2 className={styles.blog__title}>{title}</h2>
				<p className={styles.blog__description}>{children}</p>
				<div className={styles.blog__tags__container}>
					{tags.slice(0, 3).map((tagName) => {
						return <span className={styles.blog__tag}>{tagName}</span>;
					})}
				</div>
			</div>
		</div>
	);
};

export default BlogCard;