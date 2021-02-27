import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pathHeadState } from '../../state/pathState';
import Viewer from './Viewer';

const StyledViewerPanel = styled.div`

`;

const ViewerPanel = () => {
	const pathHead = useRecoilValue(pathHeadState);
	const { modelId } = pathHead;
	return (
		<StyledViewerPanel>
			<Viewer />
		</StyledViewerPanel>
	);
};

export default ViewerPanel;
