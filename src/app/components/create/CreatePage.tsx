import React from "react";
import styled from 'styled-components';
import { IPageProps } from "../../contexts/RouteContext";
import { StyledPageBody } from "../shared/PageBody";
import PageControls from "../shared/PageTitle";
import ListBuilder from "./list-builder/ListBuilder";

const StyledCreatePage = styled(StyledPageBody)`
	
`;

const CreatePage: React.FC<IPageProps> = () => {
	return (
		<StyledCreatePage>
			<PageControls title="Create Something!" subtitle="Start by inserting a viewer" />
			<ListBuilder isInsertAllowed />
		</StyledCreatePage>
	);
};

export default CreatePage;
