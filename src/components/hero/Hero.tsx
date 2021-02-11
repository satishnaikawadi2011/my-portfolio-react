import React from 'react';
import HeroListItem from '../hero-list-item/HeroListItem';
import styles from './hero.module.css';
import { motion } from 'framer-motion';
import Socialicons from '../social-icons/Socialicons';

const heroVariant = {
	visible:
		{
			opacity: 1,
			y: 0,
			transition: { delay: 0.2, duration: 0.4, type: 'spring', stiffness: 100 }
		},
	hidden:
		{
			opacity: 0,
			y: '-100vh'
		}
};

interface HeroProps {
	path?: string;
}

const Hero: React.FC<HeroProps> = ({ path }) => {
	return (
		<React.Fragment>
			<div
				className={

						path === '/' ? `${styles.hero__bg__home}` :
						`${styles.hero__bg__about}`
				}
			/>
			<motion.main className={styles.hero} initial="hidden" animate="visible" variants={heroVariant}>
				<div className={styles.hero__image__container}>
					<img className={styles.hero__image} src="images/hero-1.jpg" alt="Satish Naikawadi" />
				</div>
				<div className={styles.hero__info}>
					<div className={styles.hero__title}>
						<h4 className={styles.hero__intro__text}>hello everybody , i am</h4>
						<h1>satish naikawadi</h1>
						<h2>Web Developer / App Developer / CS College Student</h2>
					</div>
					<p className={styles.hero__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum facere beatae esse
						nobis reiciendis nisi at placeat odit exercitationem.
					</p>
					<ul className={styles.hero__list}>
						<HeroListItem icon="calendar" title="16th january, 2001" />
						<HeroListItem icon="envelop" title="satishnaikawadi2001@gmail.com" />
						<HeroListItem icon="phone" title="8975179022 , 9324636618" />
						<HeroListItem icon="home" title="Charan , maharashtra ,india" />
					</ul>
					<Socialicons />
				</div>
			</motion.main>
		</React.Fragment>
	);
};

export default Hero;
