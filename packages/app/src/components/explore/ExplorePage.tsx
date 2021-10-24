import React from "react";
import styled from 'styled-components';
import ListBuilder from "./list-builder/ListBuilder";
import Menu from './menu/Menu';

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
			<Menu />
			<StyledExplorePage>
				<ListBuilder />
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
