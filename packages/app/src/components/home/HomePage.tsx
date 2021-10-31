import React from "react";
import styled from 'styled-components';
import ButtonInput from "../../../../ui/src/inputs/ButtonInput";
import { IPageProps, PageId, useRouteContext } from '../../contexts/RouteContext';
import THEME from "../../styles/theme";
import { StyledPageBody } from "../shared/PageBody";
import PageControls from "../shared/PageTitle";

const StyledHomePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		max-width: 768px;
		font-size: 120%;
		color: #333;
		text-align: center;
		line-height: 150%;
		margin-top: 32px;
	}

	.button-container {
		button {
			width: 100%;
			max-width: 256px;
			border: 1px solid transparent;
			margin-top: 32px;
		}
		&.primary {
			button {
				font-weight: bold;
			}
		}
		&.secondary {
			button {
				background: transparent;
				color: ${THEME.clickable};

				&:hover {
					background: rgba(0,0,0,0.05)
				}
			}
		}
	}
`;

const HomePage: React.FC<IPageProps> = () => {
	const routeContext = useRouteContext();
	return (
		<StyledHomePage>
			<PageControls title="Play What?" />
			<p>
				<b>Play What</b> is a toolkit for visualizing musical concepts on the guitar.
				It has tools for creating flash cards, chord charts, cheat sheets, and other practice materials.
				<em>The app is currently unstable and is under active development.</em>
			</p>
			<div className="button-container primary">
				<ButtonInput onClick={() => routeContext.setPage(PageId.Browse)}>Browse Examples</ButtonInput>
			</div>
			<div className="button-container secondary">
				<ButtonInput onClick={() => routeContext.setPage(PageId.Docs)}>Documentation</ButtonInput>
			</div>
		</StyledHomePage>
	)
};

export default HomePage;
