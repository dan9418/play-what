import React, { createContext, useContext, useEffect } from 'react';

const OutputContext = createContext(null);

export const OutputContextProvider = ({ output, setOutput, frame, children }) => {

	const { viewerDef, viewerProps, viewerInput } = output.value;
	const setViewerProps = newProps => setOutput({ ...output, value: { ...output.value, viewerProps: newProps } });
	const setViewerInput = (newInput, newProps) => {
		setOutput({ ...output, value: { ...output.value, viewerInput: newInput, viewerProps: newProps } });
	};
	const setViewerProp = (propName, propValue) => setOutput({ ...output, value: { ...output.value, viewerProps: { ...output.value.viewerProps, [propName]: propValue } } });
	const setViewerDef = newDef => {
		const value = { viewerDef: newDef, viewerProps: newDef.defaultProps };
		setOutput({ ...output, value });
	};


	let calcProps = viewerProps;
	if (frame && frame.length) {
		calcProps = {
			...viewerProps,
			pods: frame
		};
	}

	const outputContext = {
		viewerDef, viewerProps: calcProps, setViewerDef, setViewerProps, setViewerProp, frame, viewerInput, setViewerInput
	};

	return (
		<OutputContext.Provider value={outputContext}>
			{children}
		</OutputContext.Provider>
	);
}

const useOutputContext = () => useContext(OutputContext);

export default useOutputContext;
