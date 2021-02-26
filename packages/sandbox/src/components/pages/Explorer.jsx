import React from 'react';
import styled from 'styled-components';
import BreadcrumbList from '../core/BreadcrumbList';
import DataPanel from '../core/DataPanel';
import ViewerPanel from '../core/ViewerPanel';

const StyledExplorer = styled.div`
	display: grid;
	grid-gap: 32px;
	width: 100%;
	max-width: 512px;
	margin: auto;

	@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		max-width: 100%;
	}

	grid-template-columns: 1fr;

	padding: 0 0 24px 0;
`;

const Explorer = () => {

	return (
		<>
			<BreadcrumbList />
			<StyledExplorer>
				<DataPanel />
				<ViewerPanel />
			</StyledExplorer>
		</>
	);
};

export default Explorer;
