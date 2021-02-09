import React from 'react';
import styles from './hero.module.css';

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
			<main className={styles.hero}>
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
						<li className={styles.hero__list__item}>
							<svg className={styles.hero__list__item__icon}>
								<use href="images/sprite.svg#icon-calendar" />
							</svg>
							<span> 16th january, 2001 </span>
						</li>
						<li className={styles.hero__list__item}>
							<svg className={styles.hero__list__item__icon}>
								<use href="images/sprite.svg#icon-envelop" />
							</svg>
							<span>satishnaikawadi2001@gmail.com</span>
						</li>
						<li className={styles.hero__list__item}>
							<svg className={styles.hero__list__item__icon}>
								<use href="images/sprite.svg#icon-phone" />
							</svg>
							<span>8975179022 , 9324636618</span>
						</li>
						<li className={styles.hero__list__item}>
							<svg className={styles.hero__list__item__icon}>
								<use href="images/sprite.svg#icon-home" />
							</svg>
							<span>Charan , maharashtra ,india</span>
						</li>
					</ul>
					<div className={styles.social__icons}>
						<svg className={styles.social__icon}>
							<use href="images/sprite.svg#icon-facebook" />
						</svg>
						<svg className={styles.social__icon}>
							<use href="images/sprite.svg#icon-instagram" />
						</svg>
						<svg className={styles.social__icon}>
							<use href="images/sprite.svg#icon-twitter" />
						</svg>
						<svg className={styles.social__icon}>
							<use href="images/sprite.svg#icon-linkedin2" />
						</svg>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default Hero;
