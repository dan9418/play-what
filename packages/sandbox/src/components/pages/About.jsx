import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import styled from 'styled-components';
import useRouteContext from '../../contexts/RouteContext';
import { PAGE } from './pages';

const StyledAbout = styled.div`
	h1, p, button {
		margin: 32px auto;
		display: block;
		max-width: 512px;
	}
`;

const About = () => {
	const { push } = useRouteContext();
	return (
		<StyledAbout>
			<h1>Play What?</h1>
			<p>
				Play What is a toolkit for modeling and analyzing musical blocks.
				The project is under active development and is slated for initial release in early 2021.
			</p>
			<p>
				Visit the <a href="https://github.com/dan9418/play-what">documentation</a> to understand the core blocks then check out the app to explore its capabilities:
			</p>
			<ButtonInput onClick={() => push(PAGE.chart)}>Visit App</ButtonInput>
		</StyledAbout>
	)
};

export default About;
