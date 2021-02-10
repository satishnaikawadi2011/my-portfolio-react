import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from '../../project-item/ProjectItem';
import styles from './projects.module.css';

const Projects = () => {
	return (
		<section className="projects section">
			<div className="section__title">
				<h1>my projects</h1>
			</div>
			<div className={`section__center ${styles.projects__section}`}>
				<ProjectItem category="mobile app development" image="project-1" title="ecommerce app" />
				<ProjectItem category="ethical hacking" image="project-2" title="Penetration Testing" />
				<ProjectItem category="web development" image="project-3" title="Realtime Chatting Web App" />
			</div>
			<div className={styles.btn__container}>
				<Link to="/projects" className="mainBtn" type="button">
					more projects
				</Link>
			</div>
		</section>
	);
};

export default Projects;
