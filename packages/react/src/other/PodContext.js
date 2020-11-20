import React, { createContext, useContext, useState } from 'react';
import PodUtils from '../../../core/src/PodUtils';

const PodContext = createContext(null);

export const PodContextProvider = ({ value, setValue, podType, setPodType, isList, setIsList, viewer, setViewer, viewerProps, setViewerProps, children }) => {

	const reducedValue = PodUtils.reduce(value, { isList });

	const podContext = {
		value,
		reducedValue,
		setValue,
		podType,
		setPodType,
		isList,
		setIsList,
		viewer,
		setViewer,
		viewerProps,
		setViewerProps
	};

	return (
		<PodContext.Provider value={podContext}>
			{children}
		</PodContext.Provider>
	);
}

const usePodContext = () => useContext(PodContext);

export default usePodContext;
