import React from 'react';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import styles from '../components/sections/blogs/blogs.module.css';
import BlogCard from '../components/blog-card/BlogCard';

const BlogsPage: React.FC<{}> = ({}) => {
	return (
		<div>
			<PageWrapper title="Blog Articles">
				<div className="section__title" style={{ marginTop: '6rem' }}>
					<h1>latest articles</h1>
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam
						aut quod, blanditiis rerum sint reprehenderit sequi totam quasi?
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam
						aut quod, blanditiis rerum sint reprehenderit sequi totam quasi?
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam
						aut quod, blanditiis rerum sint reprehenderit sequi totam quasi?
					</BlogCard>
					<BlogCard
						createdAt="February 10th, 2021"
						image="blog-4"
						title="layouting with flutter"
						tags={[
							'flutter',
							'mobile app development',
							'layouts'
						]}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam nulla a cum quia quam nam
						aut quod, blanditiis rerum sint reprehenderit sequi totam quasi?
					</BlogCard>
				</div>
			</PageWrapper>
		</div>
	);
};

export default BlogsPage;
