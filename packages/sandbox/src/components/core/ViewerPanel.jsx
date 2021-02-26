import React from 'react';
import { useRecoilValue } from 'recoil';
import { pathHeadState } from '../../state/pathState';
import Panel from '../ui/layout/Panel';
import Viewer from './Viewer';

const ViewerPanel = () => {
	const pathHead = useRecoilValue(pathHeadState);
	const { modelId } = pathHead;
	return (
		<Panel name="Output" caption={modelId} preview="Fretboard">
			<Viewer />
		</Panel>
	);
};

export default ViewerPanel;
