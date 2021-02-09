import React from 'react';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import PageWrapper from '../layout/pagewrapper/PageWrapper';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<PageWrapper>
			<Hero />
			<About />
		</PageWrapper>
	);
};

export default Home;
