import React, { createContext, useContext, useState } from 'react';
import PodUtils from '../../../core/src/Pod.utils';

const PodContext = createContext(null);

export const PodContextProvider = ({ value, setValue, podType, setPodType, viewer, setViewer, viewerProps, setViewerProps, children }) => {

	const reducedValue = PodUtils.reduce(value);

	const podContext = {
		value,
		reducedValue,
		setValue,
		podType,
		setPodType,
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
