import React from 'react';
import styled from 'styled-components';
import { PAGE_ID, useRouteContext } from '../../contexts/RouteContext';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';

const StyledAbout = styled.div`
	h1, p, button {
		margin: 32px auto;
		display: block;
		max-width: 512px;
	}
`;

const About = () => {
	const routeContext = useRouteContext();
	return (
		<StyledAbout>
			<h1>Play What?</h1>
			<p>
				Play What is a toolkit for modeling and analyzing musical concepts.
				The project is under active development and is slated for initial release in early 2021.
			</p>
			<p>
				Visit the <a href="https://github.com/dan9418/play-what">documentation</a> to understand the core concepts then check out the app to explore its capabilities:
			</p>
			<ButtonInput onClick={() => routeContext.setPageId(PAGE_ID.Explorer)}>Explore!</ButtonInput>
		</StyledAbout>
	)
};

export default About;
