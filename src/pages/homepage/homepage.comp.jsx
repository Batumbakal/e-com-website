import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Directory from '../../components/directory/directory.comp';
import Header from '../../components/header/header.comp';


const Homepage = () => (
	
		<Router>
			<Header/>
			<Switch>
				<div className="main-container">
					<Route exact path="/" component={Directory}/>
				</div>
			</Switch>
		</Router>
);

export default Homepage;

