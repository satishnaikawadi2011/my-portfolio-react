import React from 'react';
import './css/normalize.css';
import './css/App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/contact-page/ContactPage';
import BlogsPage from './pages/BlogsPage';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<React.Fragment>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact component={Home} path="/" />
					<Route exact component={AboutPage} path="/about" />
					<Route exact component={ProjectsPage} path="/projects" />
					<Route exact component={ContactPage} path="/contact" />
					<Route exact component={BlogsPage} path="/blogs" />
				</Switch>
			</AnimatePresence>
		</React.Fragment>
	);
}

export default App;
