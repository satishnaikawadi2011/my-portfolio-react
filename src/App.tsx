import React from 'react';
import './css/normalize.css';
import './css/App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route exact component={Home} path="/" />
					<Route exact component={AboutPage} path="/about" />
					<Route exact component={ProjectsPage} path="/projects" />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
