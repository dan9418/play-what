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
				Play What is a toolkit for modeling and analyzing musical concepts.
				The project is under active development and is slated for initial release in early 2021.
			</p>
			<p>
				Visit the documentation to understand the core concepts then check out the app to explore its capabilities:
			</p>
			<section>
				<ButtonInput onClick={() => routeContext.push(PAGE.docs)}>Documentation</ButtonInput>
				<ButtonInput onClick={() => routeContext.push(PAGE.explore)}>App</ButtonInput>
			</section>
		</StyledHome>
	)
};

export default Home;
