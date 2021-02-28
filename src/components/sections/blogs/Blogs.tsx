import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../blog-card/BlogCard';
import styles from './blogs.module.css';
import axios from 'axios';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import formate from '../../../utils/formateDate';
import readingTime from 'reading-time';

const Blogs = () => {
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		posts,
		setPosts
	] = useState<any>([]);
	const transformPosts = (postsIn: any) => {
		let transformedPosts: any = [];
		postsIn.forEach((post: any) => {
			const transformedPost = {
				id: post.id,
				image: post.cover.formats.thumbnail.url,
				title: post.title,
				createdAt: formate(post.createdAt),
				description: post.description,
				tags: post.tags.map((tag: any) => tag.name),
				readingTime: readingTime(post.content).text
			};
			transformedPosts = [
				...transformedPosts,
				transformedPost
			];
		});
		setPosts([
			...transformedPosts
		]);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const { data } = await axios.get(
				'https://saty-strapi-demo.herokuapp.com/posts?_sort=createdAt:DESC&_limit=3'
			);
			setLoading(false);
			transformPosts(data);
			console.log(posts);
		};
		fetchPosts();
	}, []);

	return (
		<section className="blogs section">
			<div className="section__title">
				<h1>blog articles</h1>
			</div>
			{
				loading ? <LoadingSpinner /> :
				<React.Fragment>
					<div className={`section__center ${styles.blogs__section}`}>
						{posts.map((post: any) => {
							return (
								<BlogCard
									readingTime={post.readingTime}
									id={post.id}
									createdAt={post.createdAt}
									image={post.image}
									title={post.title}
									tags={[
										...post.tags
									]}
									key={post.title}
								>
									{post.description}
								</BlogCard>
							);
						})}
					</div>
					<div className={styles.btn__container}>
						<Link to="/blogs" className="mainBtn" type="button">
							blog
						</Link>
					</div>
				</React.Fragment>}
		</section>
	);
};

export default Blogs;
