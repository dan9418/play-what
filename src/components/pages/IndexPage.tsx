import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { getModelIdText, ModelType } from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";
import SearchBar from "../search/SearchBar";
import { StyledPageBody } from "../layout/PageBody";
import SEO from "../utils/SEO";
import THEME from "../../styles/theme";

const StyledHomePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

	h1 {
		font-weight: 300;
		margin: 32px auto;
		font-size: 200%;
		@media(min-width: 512px) {
			font-size: 360%;
		}
		@media(min-width: 1024px) {
			font-size: 500%;
		}

		.play {
			color: ${THEME.brand.secondary};
		}
		.what {
			color: ${THEME.brand.primary};
			font-style: italic;
		}
		.q {
			color: ${THEME.brand.secondary};
		}
	}

	.intro {
		max-width: 768px;
		color: ${({ theme }) => theme.text.primary};
		text-align: center;
		line-height: 120%;
		margin-top: 32px;
		margin-top: 32px;
		font-size: 120%;
		@media(min-width: 512px) {
			font-size: 140%;
		}
		@media(min-width: 1024px) {
			font-size: 160%;
		}
	}

	.disclaimer {
		font-style: italic;
		color: ${({ theme }) => theme.text.secondary};
		text-align: center;
		margin-top: 16px;
		margin-top: 32px;
		font-size: 80%;
		@media(min-width: 512px) {
			font-size: 100%;
		}
		@media(min-width: 1024px) {
			font-size: 120%;
		}
	}

	h3 {
		margin-top: 64px;
		font-style: italic;
		color: ${({ theme }) => theme.surface.nav};
	}

	.search-bar {
        margin: 8px auto 32px;
    }
	
	.or {
		font-size: 120%;
		color: ${({ theme }) => theme.text.secondary};
		text-align: center;
		margin-bottom: 32px;
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
		max-width: 512px;

		&:hover {
			color: white;
		}
	}
`;

const IndexPage: React.FC<any> = () => {
	const [placeholder, setPlaceholder] = useState('Search the site');

	useEffect(() => {
		const id = setInterval(() => {
			const root = NOTE_PRESETS[Math.floor(Math.random() * NOTE_PRESETS.length)];
			const structure = ALL_PRESETS[Math.floor(Math.random() * ALL_PRESETS.length)];
			const text = `${root.name} ${structure.name} ${getModelIdText(structure.modelType)}`;
			setPlaceholder(text);
		}, 2000);
		return () => clearInterval(id);
	}, []);

	return (
		<StyledHomePage>
			<SEO />
			<h1>
				<span className="play">play{` `}</span>
				<span className="what">what{` `}</span>
				<span className="q">?</span>
			</h1>
			<p className="intro">
				A toolkit for exploring and visualizing musical concepts
			</p>
			<p className="disclaimer">
				This site is under active development and is slated for a formal Beta release in Q1 2022
			</p>
			<h3>What will you play today?</h3>
			<SearchBar placeholder={placeholder} />
			<div className="or">
				{`~ or ~`}
			</div>
			<Link to="/browse">Browse Chords & Scales</Link>
		</StyledHomePage>
	);
};

export default IndexPage;
