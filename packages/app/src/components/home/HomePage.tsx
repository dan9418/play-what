import React from "react";
import styled from 'styled-components';
import ButtonInput from "../../../../ui/src/inputs/ButtonInput";
import { IPageProps, PageId, useRouteContext } from '../../contexts/RouteContext';
import THEME from "../../styles/theme";

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

	.button-container {
		button {
			width: 100%;
			max-width: 256px;
			border: 1px solid transparent;
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
			<h1>Play <em><b>What?</b></em></h1>
			<p>
				<b>Play What</b> is a toolkit for visualizing musical concepts on the guitar.
				It has tools for creating flash cards, chord charts, cheat sheets, and other practice materials.
				<em>The app is currently unstable and is under active development.</em>
			</p>
			<div className="button-container primary">
				<ButtonInput onClick={() => routeContext.setPage(PageId.Create)}>Browse Examples</ButtonInput>
			</div>
			<div className="button-container secondary">
				<ButtonInput onClick={() => routeContext.setPage(PageId.Docs)}>Documentation</ButtonInput>
			</div>
		</StyledHomePage>
	)
};

export default HomePage;
