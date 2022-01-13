import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";

const StyledHomePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

	h1 {
		text-align: center !important;
		width: 100%;
	}

	.intro {
		max-width: 768px;
		font-size: 120%;
		color: ${({ theme }) => theme.text.primary};
		text-align: center;
		line-height: 120%;
		margin-top: 32px;
	}

	.disclaimer {
		font-style: italic;
		color: ${({ theme }) => theme.text.secondary};
		text-align: center;
		margin-top: 16px;
	}

	> a {
		width: 100%;
		@media(min-width: 512px) {
			width: 50%;
		}
		
		margin-top: 32px;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		border: none;
		border-radius: 4px;
		font-size: 120%;
		font-weight: bold;
		padding: 8px 16px;
		color: ${({ theme }) => theme.text.inverted};
		background-color: ${({ $isActive, theme }) => $isActive ? theme.action.active : theme.action.interactive};

		&:hover {
			opacity: .9;
		}
	}
`;

const IndexPage: React.FC<any> = () => {
	return (
		<StyledHomePage>
			<PageTitle title="Play What?" />
			<p className="intro">
				<b>Play What</b> is a toolkit for exploring musical concepts and visualizing them on the guitar.
			</p>
			<p className="disclaimer">
				This site is under active development and is slated for a formal Beta release in Q1 2022.
			</p>
			<Link to="/browse">Browse</Link>
			<Link to="/search">Search</Link>
		</StyledHomePage>
	);
};

export default IndexPage;
