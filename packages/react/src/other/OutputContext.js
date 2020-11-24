import React, { createContext, useContext, useEffect } from 'react';

const OutputContext = createContext(null);

export const OutputContextProvider = ({ output, setOutput, inputs, children }) => {

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
	if (viewerInput) {
		const theInput = inputs.find(i => viewerInput.id === i.id);
		calcProps = {
			...viewerProps,
			...theInput.value
		};
	}

	const outputContext = {
		viewerDef, viewerProps: calcProps, setViewerDef, setViewerProps, setViewerProp, inputs, viewerInput, setViewerInput
	};

	return (
		<OutputContext.Provider value={outputContext}>
			{children}
		</OutputContext.Provider>
	);
}

const useOutputContext = () => useContext(OutputContext);

export default useOutputContext;
