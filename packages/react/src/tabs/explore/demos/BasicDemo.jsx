import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import { VIEWERS } from '../../../viewers/viewers';
import Panel from '../Panel';


const BasicDemo = () => {
	const [value, setValue] = useState([[0, 0], [1, 1], [2, 2]]);
	const [podType, setPodType] = useState('note');
	const [isList, setIsList] = useState(true);
	const [viewer, setViewer] = useState(VIEWERS[0]);
	const [viewerProps, setViewerProps] = useState({});

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
