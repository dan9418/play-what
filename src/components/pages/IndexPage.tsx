import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import logoSrc from '../../../static/logo.png';
import placeholderSrc from '../../../static/note-logo.png';
import { getModelIdText } from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";
import Fretboard from "../../viewers/fretboard/Fretboard";
import ButtonInput from "../inputs/ButtonInput";
import { StyledPageBody } from "../layout/PageBody";
import SearchBar from "../search/SearchBar";
import SEO from "../utils/SEO";
import { DEFAULT_MODEL } from "./view/view.defaults";


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

	.placeholder {
		width: 128px;
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
		margin: 8px 0;
		font-size: 80%;
		@media(min-width: 512px) {
			margin: 16px 0;
			font-size: 100%;
		}
		@media(min-width: 1024px) {
			margin: 32px 0;
			font-size: 120%;
		}
	}

	section {
		border-top: 1px solid ${({ theme }) => theme.utils.border};
		width: 100%;
    	margin-top: 32px;

		& > div {
			display: grid;
			grid-template-columns: 1fr;
			gap: 32px;
			@media(min-width: 512px) {
				grid-template-columns: 1fr 1fr;
			}

			& > div:first-child {
				a {
					display: block;
					margin-top: 16px;
				}
			}
			& > div:last-child {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		&:last-child {
			margin-bottom: 256px;
		}
	}

	h3 {
		margin: 32px 0 16px;
		color: ${({ theme }) => theme.surface.nav};
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
				This site is under active development and is currently unstable.<br />A formal Beta release is planned for 8/5/22.
			</p>
			<section>
				<h3>Visualize notes on instruments</h3>
				<div>
					<div>
						<p>Project notes on a variety of instruments and customize them to your hearts content. Play What supports different tunings, voicings, inversions, and colors.</p>
						<Link to="/view">See Instruments</Link>
					</div>
					<div>
						<Fretboard
							model={DEFAULT_MODEL}
						/>
					</div>
				</div>
			</section>
			<section>
				<h3>Explore chords and scales</h3>
				<div>
					<div>
						<p>Browse an extensive library of chords, scales, and modes in every key. Easily identify relationships between them and jump between pages.</p>
						<Link to="/browse">Start Browsing</Link>
					</div>
					<div>
						<Link to="/browse"><ButtonInput>Explore Now!</ButtonInput></Link>
					</div>
				</div>
			</section>
			<section>
				<h3>Search the world of music theory</h3>
				<div>
					<div>
						<p>Search for any chord, scale, or mode in any key. Bookmark any page.</p>
						<Link to="/search">Go To Search Page</Link>
					</div>
					<div>
						<SearchBar placeholder={placeholder} />
					</div>
				</div>
			</section>
			<section>
				<h3>Build your own practice materials</h3>
				<div>
					<div>
						<p>Customize your own cheat sheets, flash cards, chord charts, and tabs.</p>
						<Link to="/">Coming Soon!</Link>
					</div>
					<div>
						<img src={placeholderSrc} className="placeholder" />
					</div>
				</div>
			</section>
		</StyledHomePage>
	);
};

export default IndexPage;
