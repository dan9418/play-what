import React from "react";
import styled from 'styled-components';
import ListBuilder from "./list-builder/ListBuilder";

const StyledCreatePage = styled.div`

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

const CreatePage: React.FC<any> = () => {
	return (
		<StyledCreatePage>
			<div>
				<ListBuilder />
			</div>
		</StyledCreatePage>
	);
};

export default CreatePage;
