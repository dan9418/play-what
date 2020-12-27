import { VIEWER } from '@pw/react';
import React, { createContext, useContext } from 'react';

const OutputContext = createContext(null);

export const OutputContextProvider = ({ data, setData, children }) => {

	const { viewerProps, viewerId, inputId } = data;

	console.log(viewerProps);

	const setInputId = x => {
		setData({
			...data,
			inputId: x
		});
	};
	const setViewerId = x => {
		setData({
			...data,
			viewerId: x
		});
	};
	const setViewerProps = x => {
		setData({
			...data,
			viewerProps: x
		});
	};

	const outputContext = {
		inputId,
		setInputId,
		viewerProps,
		setViewerProps,
		viewerId,
		setViewerId
	};

	return (
		<OutputContext.Provider value={outputContext}>
			{children}
		</OutputContext.Provider>
	);
}

const useOutputContext = () => useContext(OutputContext);

export default useOutputContext;
