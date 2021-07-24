import React from "react";
import styled from 'styled-components';
import { IPageProps } from '../../contexts/RouteContext';
import ExploreNav from '../shared/core/ExploreNav';
import ViewerPanel from './panels/ViewerPanel';

const StyledExplorePage = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	padding-bottom: 512px;
`;


const ExplorePage: React.FC<IPageProps> = () => {

	return (
		<>
			<ExploreNav />
			<StyledExplorePage>
				<ViewerPanel />
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
