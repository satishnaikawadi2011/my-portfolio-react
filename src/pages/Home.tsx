import React from 'react';
import About from '../components/sections/about/About';
import Hero from '../components/hero/Hero';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import Education from '../components/sections/education/Education';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<PageWrapper>
			<Hero />
			<About />
			<Education />
		</PageWrapper>
	);
};

export default Home;
