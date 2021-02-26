import React from 'react';
import { usePathContext } from '../../contexts/PathContext';
import Panel from '../ui/layout/Panel';
import Viewer from './Viewer';

const ViewerPanel = () => {
	const pathContext = usePathContext();
	const { modelId } = pathContext.pathHead;
	return (
		<Panel name="Output" caption={modelId} preview="Fretboard">
			<Viewer />
		</Panel>
	);
};

export default ViewerPanel;
