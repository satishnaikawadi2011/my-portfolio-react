import React, { useEffect, useState } from 'react';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import styles from '../components/sections/blogs/blogs.module.css';
import BlogCard from '../components/blog-card/BlogCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import { motion } from 'framer-motion';
import { cardContainerVariant } from '../utils/variants';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import formate from '../utils/formateDate';
import readingTime from 'reading-time';

const BlogsPage: React.FC<{}> = ({}) => {
	const [
		posts,
		setPosts
	] = useState<any>([]);
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		postCount,
		setPostCount
	] = useState(0);
	const fetchMoreData = async () => {
		let numOfPosts = 6;
		const { data } = await axios.get(
			`https://saty-strapi-demo.herokuapp.com/posts?_sort=createdAt:DESC&_limit=${numOfPosts}`
		);
		numOfPosts += 3;
		setPosts(
			data.map((post: any) => {
				return {
					...post,
					readingTime: readingTime(post.content).text
				};
			})
		);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const { data } = await axios.get(
				'https://saty-strapi-demo.herokuapp.com/posts?_sort=createdAt:DESC&_limit=3'
			);

			const { data: count } = await axios.get('https://saty-strapi-demo.herokuapp.com/posts/count');
			setPostCount(count);
			setPosts(
				data.map((post: any) => {
					return {
						...post,
						readingTime: readingTime(post.content).text
					};
				})
			);
			setLoading(false);
		};
		fetchPosts();
	}, []);
	return (
		<div>
			<PageWrapper title="Blog Articles">
				<motion.div variants={cardContainerVariant} initial="hidden" animate="visible">
					{
						loading ? <LoadingSpinner /> :
						<InfiniteScroll
							className={`section__center ${styles.blogs__section}`}
							loader={<LoadingSpinner />}
							dataLength={posts.length}
							hasMore={

									postCount > posts.length ? true :
									false
							}
							next={fetchMoreData}
						>
							{posts.map((post: any) => {
								return (
									<BlogCard
										readingTime={post.readingTime}
										id={post.id}
										key={post.slug}
										createdAt={formate(post.createdAt)}
										image={post.cover.formats.thumbnail.url}
										title={post.title}
										tags={post.tags.map((tag: any) => tag.name)}
									>
										{post.description}
									</BlogCard>
								);
							})}
						</InfiniteScroll>}
				</motion.div>
			</PageWrapper>
		</div>
	);
};

export default BlogsPage;
