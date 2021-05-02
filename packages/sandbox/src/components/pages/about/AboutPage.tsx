import { EMPTY_GROUP } from "@pw/core/src/models/Group/Group.constants";
import React from "react";
import LIBRARY_PATH_ROOT from "@pw/sandbox/src/data/library";
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
		font-size: 110%;
		font-weight: bold;
		width: 100%;
		max-width: 90%;
		border: 1px solid transparent;

		:first-child {
			margin-bottom: 16px;
		}
		:last-child {
			background-color: transparent;
			border-color: ${({ theme }) => theme.accent};
			color: ${({ theme }) => theme.accent};
			:hover {
				background-color: rgba(0,0,0, .1);;
			}
		}

		@media(min-width: 512px) {
			max-width: 256px;
			:first-child {
				margin-bottom: 0;
				margin-right: 16px;
			}
			:last-child {
			
			}
		}
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
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { data: LIBRARY_PATH_ROOT })}>Browse Presets</ButtonInput>
				<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { data: EMPTY_GROUP })}>Start From Scratch (BETA)</ButtonInput>
			</StyledButtonContainer>
			<p>
				<a href="https://github.com/dan9418/play-what/blob/master/README.md" target="_blank" rel="noreferrer">Documentation</a>
			</p>
		</StyledAboutPage>
	)
};

export default AboutPage;
