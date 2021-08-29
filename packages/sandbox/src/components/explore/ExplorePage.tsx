import React from "react";
import styled from 'styled-components';
import ExploreNav from './nav/ExploreNav';
import Viewer from "./Viewer";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 96px;
	left: 0;
	right: 0;
	bottom: 0;
	
	height: 100%;
	width: 100%;

	.stage {
		width: 100%;
		height: 100%;
		padding: 16px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fretboard, .keyboard {
		box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
		max-width: 1024px;
	}
`;


const ExplorePage: React.FC<any> = () => {
	return (
		<>
			<ExploreNav />
			<StyledExplorePage>
				<div className="stage">
					<Viewer />
				</div>
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
