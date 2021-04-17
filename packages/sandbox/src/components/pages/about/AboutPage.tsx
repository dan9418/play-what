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
		color: #555;
	}

	> button {
		font-size: 110%;
		font-weight: bold;
		width: 100%;
		max-width: 256px;
	}
`;

const AboutPage: React.FC = () => {
	const routeContext = useRouteContext();
	return (
		<StyledAboutPage>
			<h1>Play <em><b>What?</b></em></h1>
			<p>
				<b>Play What</b> is a toolkit for modeling and analyzing musical concepts.
				The project is under active development and is slated for initial release in early 2021.
			</p>
			<p>
				Visit the <a href="https://github.com/dan9418/play-what">documentation</a> to understand the core concepts then check out the app to explore its capabilities:
			</p>
			<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { data: LIBRARY_PATH_ROOT })}>Browse Presets</ButtonInput>
			<ButtonInput onClick={() => routeContext.setPage(PageId.Explore, { data: EMPTY_GROUP })}>Start From Scratch</ButtonInput>
		</StyledAboutPage>
	)
};

export default AboutPage;
