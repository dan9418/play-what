import React from "react";
import styled from 'styled-components';
import THEME from "../../styles/theme";
import { StyledPageBody } from "../layout/PageBody";

const StyledHomePage = styled(StyledPageBody)`
	
`;

const IndexPage: React.FC<any> = () => {


	return (
		<StyledHomePage>
			<h1>Looper Club</h1>
			<h2>@ The Library of Musiclandria</h2>
			<p className="intro">
				A toolkit for exploring and visualizing musical concepts
			</p>
		</StyledHomePage>
	);
};

export default IndexPage;
