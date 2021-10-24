import React from "react";
import styled from 'styled-components';
import Nav from "./nav/Nav";
import ListBuilder from "./list-builder/ListBuilder";
import Menu from './menu/Menu';
import { MenuList } from "./menu/MenuList";
import EditPanel from "./edit-panel/EditPanel";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 0;
	
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;

	> div {
		display: grid;
		grid-template-columns: 512px 512px;
		gap: 16px;

		.test {
			margin: 16px 0;
			padding: 16px;
			background: ${({ theme }) => theme.surface.highlight};
    		border-radius: 8px;
			border: 1px solid #ccc;
		}
	}
`;


const ExplorePage: React.FC<any> = () => {

	return (
		<>
			<Nav />
			<Menu />
			<StyledExplorePage>
				<div>
					<ListBuilder />
					<EditPanel />
				</div>
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
