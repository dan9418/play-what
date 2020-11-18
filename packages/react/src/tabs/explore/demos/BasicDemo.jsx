import { SCALE } from '@pw/core/src/modules/Presets';
import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import { VIEWERS } from '../../../viewers/viewers';
import Panel from '../Panel';


const BasicDemo = () => {
	const [value, setValue] = useState(SCALE.Major.value);
	const [podType, setPodType] = useState('note');
	const [isList, setIsList] = useState(true);
	const [viewer, setViewer] = useState(VIEWERS[2]);
	const [viewerProps, setViewerProps] = useState(VIEWERS[2].defaultInputs);

	return (
		<>
			<PodContextProvider
				value={value}
				setValue={setValue}
				podType={podType}
				setPodType={setPodType}
				isList={isList}
				setIsList={setIsList}
				viewer={viewer}
				setViewer={setViewer}
				viewerProps={viewerProps}
				setViewerProps={setViewerProps}
			>
				<Panel name="Basic" />
			</PodContextProvider>
		</>
	);
};

export default BasicDemo;
