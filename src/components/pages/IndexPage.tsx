import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import logoSrc from '../../../static/play_what_logo_web.png';
import { getModelIdClass, getModelIdText } from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";
import Note from "../../core/models/Note";
import { StyledPageBody } from "../layout/PageBody";
import SearchBar, { StyledSearchBar } from "../search/SearchBar";
import SEO from "../utils/SEO";
import { DEFAULT_MODEL } from "./view/view.defaults";


const StyledHomePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

	.logo {
		width: 256px;
		margin: 16px 0;
		@media(min-width: 512px) {
			width: 512px;
			margin: 32px 0;
		}
		@media(min-width: 1024px) {
			width: 768px;
			margin: 48px 0;
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

	${StyledSearchBar} {
		margin: 32px auto;
		display: flex;
		justify-content: center;
	}

	.preview {
		margin: 32px;
		display: grid;
		@media(min-width: 512px) {
			grid-template-columns: 1fr 1fr;
		}
		gap: 16px;

		width: 80%;

		& > * {
			width: 100%;
		}
	}

	.grid {
		display: grid;
		@media(min-width: 512px) {
			grid-template-columns: 1fr 1fr;
		}
		gap: 32px;
	}

	section {
		width: 100%;
    	margin-top: 32px;

		& > div {
			// display: grid;
			// grid-template-columns: 1fr;
			// gap: 32px;
			// @media(min-width: 512px) {
			// 	grid-template-columns: 1fr 1fr;
			// }

			& > div.txt {
				a {
					display: block;
					margin-top: 16px;
				}
			}
			& > div.action {
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

	.tiles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		
		.tile {
			background-color: white;
			border-radius: 8px;
			padding: 16px 8px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

const IndexPage: React.FC<any> = () => {
	const [placeholder, setPlaceholder] = useState('Search the site');
	const [model, setModel] = useState(DEFAULT_MODEL);

	useEffect(() => {
		const id = setInterval(() => {
			const root = NOTE_PRESETS[Math.floor(Math.random() * NOTE_PRESETS.length)];
			const structure = ALL_PRESETS[Math.floor(Math.random() * ALL_PRESETS.length)];
			const text = `${root.name} ${structure.name} ${getModelIdText(structure.modelType)}`;
			const cl = getModelIdClass(structure.modelType);
			const m = new cl(structure.modelId, { root: Note.fromId(root.modelId) })

			setPlaceholder(text);
			setModel(m);
		}, 4000);
		return () => clearInterval(id);
	}, []);

	return (
		<StyledHomePage>
			<SEO />
			<img src={logoSrc} className="logo" /*width={768} height={128}*/ />
			<p className="intro">
				Every chord. Every scale. Every key.
				{/*A toolkit for exploring and visualizing musical concepts*/}
			</p>

			{/*<p className="disclaimer">
				This site is under active development and is currently unstable.<br />A formal Beta release is planned for 8/5/22.
			</p>*/}
			<SearchBar placeholder={placeholder} />
			{/*<div className="preview">
				<PreviewCard model={model} />
				<Fretboard model={model} />
			</div>*/}
			<div className="tiles">
				<Link to="/browse" className="tile">
					Browse Chords & Scales
				</Link>
				<Link to="/view" className="tile">
					View Instruments
				</Link>
				<Link to="/browse" className="tile">
					Random Page
				</Link>
			</div>
			<div className="grid">
				<section>
					<h3>Explore Music Theory</h3>
					<div>
						<div className="txt">
							<p>Browse chords and scales and explore their relationships.</p>
							<Link to="/browse">Chords</Link>
							<Link to="/browse">Scales</Link>
						</div>
					</div>
				</section>
				<section>
					<h3>Customize Instruments</h3>
					<div>
						<div className="txt">
							<p>Play What currents supports two instrument types with plans for more.</p>
							<Link to="/view/fretboard">Fretboard</Link>
							<Link to="/view/keyboard">Keyboard</Link>
						</div>
					</div>
				</section>
				<section>
					<h3>Have Feedback? Get In Touch</h3>
					<div>
						<div className="txt">
							<p>Use the form below to provide feedback, report bugs, request features, or contact the author.</p>
							<Link to="/browse">Take The Survey</Link>
						</div>
					</div>
				</section>
				<section>
					<h3>Confused? Learn More</h3>
					<div>
						<div className="txt">
							<p>Play What offers something for musicians of all skill levels. Use the resources below to find the features most useful for you.</p>
							<Link to="/help">Help</Link>
							<Link to="/about">About</Link>
							<Link to="/coming-soon">Coming Soon</Link>
						</div>
					</div>
				</section>
			</div>
		</StyledHomePage>
	);
};

export default IndexPage;
