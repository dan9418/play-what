import React from "react";
import styled from 'styled-components';
import ExploreNav from './nav/ExploreNav';
import Stage from "./stage/Stage";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 160px;
	left: 0;
	right: 0;
	bottom: 0;
	
	height: 100%;
	width: 100%;
`;


const ExplorePage: React.FC<any> = () => {
	return (
		<>
			<ExploreNav />
			<StyledExplorePage>
				<Stage />
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
