import React from 'react';
import './css/normalize.css';
import './css/App.css';
import 'react-on-scroll-animation/build/index.css';

import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/contact-page/ContactPage';
import BlogsPage from './pages/BlogsPage';
import { AnimatePresence } from 'framer-motion';
import PostPage from './pages/post-page/PostPage';
import PostsByTag from './pages/post-page/PostsByTag';

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
					<Route exact component={PostPage} path="/posts/:id" />
					<Route exact component={PostsByTag} path="/posts/tag/:tag" />
				</Switch>
			</AnimatePresence>
		</React.Fragment>
	);
}

export default App;
