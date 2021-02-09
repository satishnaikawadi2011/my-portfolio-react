import React from 'react';
import About from '../components/sections/about/About';
import Hero from '../components/hero/Hero';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import Education from '../components/sections/education/Education';
import Services from '../components/service/Services';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<PageWrapper>
			<Hero />
			<About />
			<Education />
			<Services />
		</PageWrapper>
	);
};

export default Home;
