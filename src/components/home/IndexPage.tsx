import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import SearchBar from "../search/SearchBar";
import { StyledPageBody } from "../_shared/layout/PageBody";

const StyledHomePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

	h1 {
		margin-top: 32px;
		font-size: 220%;
		@media(min-width: 512px) {
			font-size: 360%;
		}
		@media(min-width: 1024px) {
			font-size: 500%;
		}
	}

	p {
		font-size: 100%;
		@media(min-width: 512px) {
			font-size: 120%;
		}
		@media(min-width: 1024px) {
			font-size: 140%;
		}
	}

	.intro {
		max-width: 768px;
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
	
	.or {
		font-size: 120%;
		color: ${({ theme }) => theme.text.secondary};
		text-align: center;
		padding: 0 0 32px 0;
	}

	> a {
		border-radius: 8px;
		cursor: pointer;
		color: white;
		font-weight: bold;
		background-color: ${props => props.theme.action.interactive};
		padding: 8px 16px;

		display: flex;
		align-items: center;
		justify-content: center;
	
		width: 100%;
		@media(min-width: 512px) {
			width: 50%
		}
	}
`;

const IndexPage: React.FC<any> = () => {
	return (
		<StyledHomePage>
			<h1>Play <em>What?</em></h1>
			<p className="intro">
				A toolkit for exploring and visualizing musical concepts.
			</p>
			<p className="disclaimer">
				This site is under active development and is slated for a formal Beta release in Q1 2022.
			</p>
			<SearchBar />
			<div className="or">
				{`~ or ~`}
			</div>
			<Link to="/browse">Browse Chords & Scales</Link>
		</StyledHomePage>
	);
};

export default IndexPage;
