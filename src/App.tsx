import React from 'react';
import './css/normalize.css';
import './css/App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/contact-page/ContactPage';
import BlogsPage from './pages/BlogsPage';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route exact component={Home} path="/" />
					<Route exact component={AboutPage} path="/about" />
					<Route exact component={ProjectsPage} path="/projects" />
					<Route exact component={ContactPage} path="/contact" />
					<Route exact component={BlogsPage} path="/blogs" />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
