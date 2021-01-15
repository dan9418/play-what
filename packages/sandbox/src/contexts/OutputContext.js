import { VIEWER } from '@pw/react';
import React, { createContext, useContext } from 'react';

const OutputContext = createContext(null);

export const OutputContextProvider = ({ data, setData, children }) => {

	const { viewerProps, viewerId, inputId } = data;

	const setInputId = x => {
		setData({
			...data,
			inputId: x
		});
	};
	const setViewerPreset = (id, props) => {
		setData({
			...data,
			viewerId: id,
			viewerProps: props
		});
	};
	const setViewerId = x => {
		setData({
			...data,
			viewerId: x,
			viewerProps: VIEWER[x].presets[0].value
		});
	};
	const setViewerProps = x => {
		setData({
			...data,
			viewerProps: x
		});
	};
	const setViewerProp = (k, v) => {
		const newProps = {
			...viewerProps,
			[k]: v
		};
		setViewerProps(newProps);
	};


	const outputContext = {
		inputId,
		setInputId,
		viewerProps,
		setViewerProps,
		setViewerProp,
		viewerId,
		setViewerId,
		setViewerPreset
	};

	return (
		<OutputContext.Provider value={outputContext}>
			{children}
		</OutputContext.Provider>
	);
}

const useOutputContext = () => useContext(OutputContext);

export default useOutputContext;
