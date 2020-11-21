import React, { createContext, useContext } from 'react';

const OutputContext = createContext(null);

export const OutputContextProvider = ({ output, setOutput, inputs, children }) => {

	const { viewerDef, viewerProps } = output.value;
	const setViewerProps = newProps => setOutput({ ...output, value: { ...output.value, viewerProps: newProps } });
	const setViewerProp = (propName, propValue) => setOutput({ ...output, value: { ...output.value, viewerProps: { ...output.value.viewerProps, [propName]: propValue } } });
	const setViewerDef = newDef => {
		const value = { viewerDef: newDef, viewerProps: newDef.defaultProps };
		setOutput({ ...output, value });
	};

	const outputContext = {
		viewerDef, viewerProps, setViewerDef, setViewerProps, setViewerProp, inputs
	};

	return (
		<OutputContext.Provider value={outputContext}>
			{children}
		</OutputContext.Provider>
	);
}

const useOutputContext = () => useContext(OutputContext);

export default useOutputContext;
