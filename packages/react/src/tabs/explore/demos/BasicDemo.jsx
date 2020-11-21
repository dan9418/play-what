import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import { VIEWERS } from '../../../viewers/viewers';
import InputPanel from '../panels/InputPanel';
import OutputPanel from '../panels/OutputPanel';

const BasicDemo = () => {
	const [pods, _setPods] = useState(SCALE.Major.value);
	const [podType, _setPodType] = useState('note');
	const [viewer, _setViewer] = useState(VIEWERS[2]);
	const [viewerProps, setViewerProps] = useState(VIEWERS[2].defaultProps);

	const setViewer = v => { _setViewer(v); setViewerProps(v.defaultProps); };
	const setPods = v => { _setPods(v); setViewerProps({ ...viewerProps, pods: v }); };
	const setPodType = v => { _setPodType(v); _setViewerProps({ ...viewerProps, podType: v }); };

	return (
		<>
			<PodContextProvider
				pods={pods}
				setPods={setPods}
				podType={podType}
				setPodType={setPodType}
				viewer={viewer}
				setViewer={setViewer}
				viewerProps={viewerProps}
				setViewerProps={setViewerProps}
			>
				<div className="basic-demo">
					<InputPanel />
					<OutputPanel />
				</div>
			</PodContextProvider>
		</>
	);
};

export default BasicDemo;
