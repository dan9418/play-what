import React from "react";
import styled from 'styled-components';
import ListBuilder from "./list-builder/ListBuilder";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 0;

	width: 100%;

	display: flex;
	justify-content: center;

	overflow: auto;

	> div {
		width: 100%;
		max-width: 1024px;
		//max-width: 512px;
	}
`;

const ExplorePage: React.FC<any> = () => {
	return (
		<StyledExplorePage>
			<div>
				<ListBuilder />
			</div>
		</StyledExplorePage>
	);
};

export default ExplorePage;
