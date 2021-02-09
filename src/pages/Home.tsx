import React from 'react';
import About from '../components/sections/about/About';
import Hero from '../components/hero/Hero';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import Education from '../components/sections/education/Education';
import Services from '../components/sections/service/Services';
import Projects from '../components/sections/projects/Projects';
import Blogs from '../components/sections/blogs/Blogs';
import Technologies from '../components/technologies/Technologies';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<PageWrapper>
			<Hero />
			<About />
			<Education />
			<Services />
			<Projects />
			<Blogs />
			<Technologies />
		</PageWrapper>
	);
};

export default Home;
