import React, { useState } from "react";
import styled from 'styled-components';
import Menu, { StyledMenu } from "../shared/core/Menu";
import ExploreNav from './nav/ExploreNav';
import Viewer from "./Viewer";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 96px;
	left: 0;
	right: 0;
	bottom: 0;

	display: grid;
	grid-template-columns: ${props => props.$isMenuOpen ? '1fr auto;' : '1fr'};
	
	height: 100%;
	width: 100%;

	.stage {
		width: 100%;
		padding: 0 16px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	${StyledMenu} {
		* {
			display: ${props => props.$isMenuOpen ? '' : 'none'};
		}
		${props => props.$isMenuOpen ? '' : 'opacity: 0;'};

		width: ${props => props.$isMenuOpen ? '512' : '0'}px;
		transition: width .5s;
	}

	.fretboard, .keyboard {
		box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
		max-width: 1024px;
	}
`;


const ExplorePage: React.FC<any> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<ExploreNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<StyledExplorePage $isMenuOpen={isMenuOpen}>
				<div className="stage">
					<Viewer />
				</div>
				<Menu />
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
