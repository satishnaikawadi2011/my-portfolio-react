import React from 'react';
import BlogCard from '../../blog-card/BlogCard';
import styles from './blogs.module.css';

const Blogs = () => {
	return (
		<section className="blogs section">
			<div className="section__title">
				<h1>blog articles</h1>
			</div>
			<div className={`section__center ${styles.blogs__section}`}>
				<BlogCard
					createdAt="May 25th, 2021"
					image="blog-1"
					title="Javascript Tricky Parts"
					tags={[
						'javascript'
					]}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam aut
					quod, blanditiis rerum sint reprehenderit sequi totam quasi?
				</BlogCard>
				<BlogCard
					createdAt="March 18th, 2021"
					image="blog-2"
					title="NextJS - next big thing"
					tags={[
						'react',
						'server-side-rendering',
						'static sites',
						'node JS'
					]}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam aut
					quod, blanditiis rerum sint reprehenderit sequi totam quasi?
				</BlogCard>
				<BlogCard
					createdAt="April 6th, 2021"
					image="blog-3"
					title="SVG animations"
					tags={[
						'SVG',
						'CSS',
						'animations'
					]}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam aut
					quod, blanditiis rerum sint reprehenderit sequi totam quasi?
				</BlogCard>
			</div>
			<div className={styles.btn__container}>
				<button className="mainBtn" type="button">
					blog
				</button>
			</div>
		</section>
	);
};

export default Blogs;
