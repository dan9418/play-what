import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import useRouteContext from '../../../contexts/RouteContext';
import { PAGE } from '../pages';

const Home = () => {
	const routeContext = useRouteContext();

	return (
		<div>
			<h1>Play What?</h1>
			<p>
				Play What is a toolkit for modeling and analyzing musical concepts.
				Some of the core components include:
			</p>
			<ul>
				<li>A simple, efficient, and flexible data structure spec</li>
				<li>A JavaScript API for working with these data structures</li>
				<li>An immutable object-oriented JavaScript framework to wrap these data structures</li>
				<li>A React component library for consuming and analyzing these data structures</li>
				<li>A free web app demonstrating the libraries abilities accessible to musicians of all stripes</li>
				<li>An open-source repository designed to be easily forked and extended</li>
				<li>A young community of technical music theory enthusiasts</li>
			</ul>
			<section>
				<ButtonInput onClick={() => routeContext.push(PAGE.explore)}>Explore</ButtonInput>
				<ButtonInput onClick={() => routeContext.push(PAGE.chart)}>Chart</ButtonInput>
			</section>
		</div>
	)
};

export default Home;
