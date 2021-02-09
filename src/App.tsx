import React from 'react';
import './css/normalize.css';
import './css/App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route exact component={Home} path="/" />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
