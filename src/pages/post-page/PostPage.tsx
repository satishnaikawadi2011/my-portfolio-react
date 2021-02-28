import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import readingTime from 'reading-time';
import SocialShare from '../../components/social-share/SocialShareIcons';

import styles from './post-page.module.css';
import formate from '../../utils/formateDate';
import Tag from '../../components/tag/Tag';
import MdContent from '../../components/md-content/MdContent';

const PostPage = () => {
	const params: { id: string } = useParams();
	const [
		post,
		setPost
	] = useState<any>(null);
	const [
		loading,
		setLoading
	] = useState(true);
	useEffect(() => {
		const fetchPost = async () => {
			setLoading(true);
			const { data } = await axios.get(`https://saty-strapi-demo.herokuapp.com/posts/${params.id}`);
			console.log(data);
			setPost({
				...data,
				readingTime: readingTime(data.content).text
			});
			setLoading(false);
		};
		fetchPost();
	}, []);
	return (
		<React.Fragment>
			{
				loading ? <LoadingSpinner /> :
				<PageWrapper title={post.title} className={styles.content}>
					<div className={styles.post__info}>
						<span>{formate(post.createdAt)}</span>
						<span>&bull; {post.readingTime}</span>
						<div>
							{post.tags.map((tag: any) => {
								return <Tag tagName={tag.name} />;
							})}
						</div>
						<SocialShare item={post} size={70} url="https://saty-portfolio.netlify.app/" />
					</div>
					<div className="divider" />
					<MdContent>{post.content}</MdContent>
					<div className="divider" />
					<div className={styles.tags__and__social__share}>
						<div className={styles.social__share}>
							<h2>Share</h2>
							<SocialShare item={post} size={50} url="https://saty-portfolio.netlify.app/" />
						</div>
						<div className={styles.tags}>
							<h2>Tags</h2>
							{post.tags.map((tag: any) => {
								return <Tag bgColor="var(--secondaryColor)" color="black" tagName={tag.name} />;
							})}
						</div>
					</div>
				</PageWrapper>}
		</React.Fragment>
	);
};

export default PostPage;
