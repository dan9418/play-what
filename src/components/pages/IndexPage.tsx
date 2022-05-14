import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import logoSrc from '../../../static/logo.png';
import { getModelIdText } from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";
import { StyledPageBody } from "../layout/PageBody";
import SearchBar from "../search/SearchBar";
import SEO from "../utils/SEO";


const StyledHomePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

	.logo {
		width: 256px;
		margin: 16px 0 32px;
		@media(min-width: 512px) {
			width: 512px;
			margin: 32px 0 64px;
		}
		@media(min-width: 1024px) {
			width: 1024px;
			margin: 64px 0 128px;
		}
	}

	.intro {
		max-width: 768px;
		color: ${({ theme }) => theme.text.primary};
		text-align: center;
		line-height: 120%;
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
		margin-top: 8px;
		font-size: 80%;
		@media(min-width: 512px) {
			margin-top: 16px;
			font-size: 100%;
		}
		@media(min-width: 1024px) {
			margin-top: 32px;
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
			<img src={logoSrc} className="logo" />
			<p className="intro">
				A toolkit for exploring and visualizing musical concepts
			</p>
			<p className="disclaimer">
				This site is under active development and a formal Beta release is planned for Q2 2022
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
