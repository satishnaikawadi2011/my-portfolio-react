import React from 'react';
import AboutCard from '../../about-card/AboutCard';
import Skill from '../../skill/Skill';
import styles from './about.module.css';
import Rosa from 'react-on-scroll-animation';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
	return (
		<section className={`${styles.about} section`}>
			<div className="section__title">
				<h1>about myself</h1>
			</div>
			<div className="section__center">
				<div className={styles.left__half}>
					<Rosa duration={100} animation="fade-right">
						<p className={styles.about__text}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sit quaerat unde odit
							reiciendis est quia id dignissimos in esse, veniam quod, maxime cupiditate nam fugiat
							corporis labore voluptates animi
						</p>

						<div className={styles.about__cards}>
							<AboutCard icon="icon-files-empty" stats={20} title="total projects" />
							<AboutCard icon="icon-users" stats={50} title="github followers" />
							<AboutCard icon="icon-files-empty" stats={20} title="total projects" />
						</div>
					</Rosa>
				</div>
				<div className={`${styles.skills} ${styles.right__half}`}>
					<Rosa animation="zoom-in-up" duration={100}>
						<Skill name="javascript" percent={80} />
						<Skill name="react JS" percent={90} />
						<Skill name="flutter" percent={75} />
						<Skill name="docker" percent={55} />
						<Skill name="node JS" percent={85} />
					</Rosa>
				</div>
			</div>
		</section>
	);
};

export default About;
