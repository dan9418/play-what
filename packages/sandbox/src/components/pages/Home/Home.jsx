import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import styled from 'styled-components';
import useRouteContext from '../../../contexts/RouteContext';
import { PAGE } from '../pages';

const StyledHome = styled.div`
	height: 100%;
	width: 100%;
	max-width: 512px;
	margin: auto;

	& > h1, & > p {
		margin: 32px 0;
	}

	& > section {
		width: 100%;
		text-align: center;

		& button {
			margin: 16px;
			font-size: 110%;
			font-weight: bold;
			padding: 16px;
		}
	}
`;

const Home = () => {
	const routeContext = useRouteContext();

	return (
		<StyledHome>
			<h1>Play What?</h1>
			<p>
				Play What is a toolkit for modeling and analyzing musical concepts, inlcuding...
			</p>
			<ul>
				<li>A simple, efficient, and flexible musical data structure spec</li>
				<li>A JavaScript API for working with these data structures</li>
				<li>A React component library for consuming and analyzing these data structures</li>
				<li>A free web app demonstrating its abilities</li>
				<li>An open-source repository designed to be easily forked and extended</li>
				<li>A young community of technical music theory enthusiasts</li>
			</ul>
			<p>
				Play What is under active development and is slated for initial release in early 2021.
			</p>
			<section>
				<ButtonInput onClick={() => routeContext.push(PAGE.docs)}>Documentation</ButtonInput>
				<ButtonInput onClick={() => routeContext.push(PAGE.explore)}>App</ButtonInput>
			</section>
		</StyledHome>
	)
};

export default Home;
