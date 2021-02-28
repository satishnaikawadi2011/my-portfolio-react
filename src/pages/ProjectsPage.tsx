import React from 'react';
import ProjectItem from '../components/project-item/ProjectItem';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import { motion } from 'framer-motion';
import { cardContainerVariant } from '../utils/variants';

const ProjectsPage: React.FC<{}> = ({}) => {
	return (
		<div>
			<PageWrapper title="My Projects">
				<motion.div
					variants={cardContainerVariant}
					initial="hidden"
					animate="visible"
					className={`section__center projects__section`}
				>
					<ProjectItem category="mobile app development" image="project-1" title="ecommerce app" />
					<ProjectItem category="ethical hacking" image="project-2" title="Penetration Testing" />
					<ProjectItem category="web development" image="project-3" title="Realtime Chatting Web App" />
					<ProjectItem category="backend development" image="project-4" title="Color Shades NPM Package" />
				</motion.div>
			</PageWrapper>
		</div>
	);
};

export default ProjectsPage;
