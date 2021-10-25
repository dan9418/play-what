import React from "react";
import styled from 'styled-components';
import EditPanel from "./edit-panel/EditPanel";
import ListBuilder from "./list-builder/ListBuilder";
import Menu from './menu/Menu';
import Nav from "./nav/Nav";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 0;

	width: 100%;

	display: flex;
	justify-content: center;

	> div {
		width: 100%;
		max-width: 1024px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
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
					<div>
						<EditPanel />
					</div>
				</div>
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
