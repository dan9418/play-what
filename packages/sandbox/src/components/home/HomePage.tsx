import React from "react";
import styled from 'styled-components';
import { PageId, useRouteContext } from '../../contexts/_RouteContext';
import ButtonInput from '../shared/ui/ButtonInput';

const StyledHomePage = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0 16px;

	> * {
		margin-top: 32px;
	}
	
	> h1 {
		width: 100%;
		text-align: center;
		font-size: 300%;
		color: #222;
		padding-bottom: 16px;
		border-bottom: 1px solid ${({ theme }) => theme.border};

		b {
			font-weight: 800;
		}
	}

	> p {
		max-width: 768px;
		font-size: 120%;
		color: #333;
		text-align: center;
		line-height: 150%;
	}
`;


const StyledButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	@media(min-width: 512px) {
		flex-direction: row;
	}

	> button {
		font-weight: bold;
		width: 100%;
		max-width: 256px;
		border: 1px solid transparent;
		margin: 8px;
	}
`;

const HomePage: React.FC = () => {
	const routeContext = useRouteContext();
	return (
		<StyledHomePage>
			<h1>Play <em><b>What?</b></em></h1>
			<p>
				<b>Play What</b> is a toolkit for modeling and analyzing musical concepts.
				The app is currently unstable but is slated for a full release this summer.
			</p>
			<StyledButtonContainer>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore)}>Try it out!</ButtonInput>
			</StyledButtonContainer>
			<p>
				<a href="https://github.com/dan9418/play-what/blob/master/README.md" target="_blank" rel="noreferrer">Documentation</a>
			</p>
		</StyledHomePage>
	)
};

export default HomePage;
