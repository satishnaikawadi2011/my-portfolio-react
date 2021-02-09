import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/sections/about/About';
import PageWrapper from '../layout/pagewrapper/PageWrapper';

const AboutPage: React.FC<{}> = ({}) => {
	return (
		<PageWrapper>
			<div className="section__title" style={{ marginTop: '6rem' }}>
				<h1>about me</h1>
			</div>
			<Hero />
			<About />
		</PageWrapper>
	);
};

export default AboutPage;
