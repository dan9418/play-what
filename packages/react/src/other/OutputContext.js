import React, { createContext, useContext } from 'react';

const OutputContext = createContext(null);

export const OutputContextProvider = ({ output, setOutput, children }) => {

	const { viewerDef, viewerProps } = output.value;
	const setViewerDef = newDef => setOutput({ ...output, value: { ...output.value, def: newDef } });
	const setViewerProps = newProps => setOutput({ ...output, value: { ...output.value, props: newProps } });
	const setViewerProp = (propName, propValue) => setOutput({ ...output, value: { ...output.value, props: { ...output.value.props, [propName]: propValue } } });

	const outputContext = {
		viewerDef, viewerProps, setViewerDef, setViewerProps, setViewerProp
	};

	return (
		<OutputContext.Provider value={outputContext}>
			{children}
		</OutputContext.Provider>
	);
}

const useOutputContext = () => useContext(OutputContext);

export default useOutputContext;
