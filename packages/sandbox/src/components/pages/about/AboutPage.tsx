import { ModelId } from "@pw/core/src/models/Model.constants";
import React from "react";
import styled from 'styled-components';
import { PageId, useRouteContext } from '../../../contexts/RouteContext';
import ButtonInput from '../../ui/inputs/buttons/ButtonInput';

const StyledAboutPage = styled.div`
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
		max-width: 90%;
		border: 1px solid transparent;
		margin: 8px;
	}
`;

const AboutPage: React.FC = () => {
	const routeContext = useRouteContext();
	return (
		<StyledAboutPage>
			<h1>Play <em><b>What?</b></em></h1>
			<p>
				<b>Play What</b> is a toolkit for modeling and analyzing musical concepts.
				The app is currently unstable and is slated for a full release in Summer 2021.
			</p>
			<StyledButtonContainer>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { modelId: ModelId.Note })}>Notes</ButtonInput>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { modelId: ModelId.Interval })}>Intervals</ButtonInput>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { modelId: ModelId.Chord })}>Chords</ButtonInput>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { modelId: ModelId.Scale })}>Scales</ButtonInput>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { modelId: ModelId.Chart })}>Charts</ButtonInput>
			</StyledButtonContainer>
			<p>
				<a href="https://github.com/dan9418/play-what/blob/master/README.md" target="_blank" rel="noreferrer">Documentation</a>
			</p>
		</StyledAboutPage>
	)
};

export default AboutPage;
