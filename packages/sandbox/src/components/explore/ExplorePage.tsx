import React from "react";
import styled from 'styled-components';
import { IPageProps } from '../../contexts/RouteContext';
import ExploreNav from '../shared/core/ExploreNav';
import ViewerPanel from './panels/ViewerPanel';

const StyledExplorePage = styled.div`
	position: fixed;
	top: 96px;
	bottom: 0;
	width: 100%;
	padding: 0 16px;
	max-width: 1024px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;

	.fretboard {
		box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08)
	}
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
