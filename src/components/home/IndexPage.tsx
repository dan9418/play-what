import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import ButtonInput from "../../../ui/inputs/ButtonInput";
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

const IndexPage: React.FC<any> = () => {
	return (
		<StyledHomePage>
			<PageControls title="Play What?" />
			<p>
				<b>Play What</b> is a toolkit for visualizing musical concepts on the guitar.
				It has tools for creating flash cards, chord charts, cheat sheets, and other practice materials.
			</p>
			<p>
				<em>The app is currently unstable and is under active development.</em>
			</p>
			<div className="button-container primary">
				<Link to="/browse"><ButtonInput onClick={null}>Browse Examples</ButtonInput></Link>
			</div>
			<div className="button-container secondary">
				<Link to="/docs"><ButtonInput onClick={null}>Documentation</ButtonInput></Link>
			</div>
		</StyledHomePage>
	);
};

export default IndexPage;
