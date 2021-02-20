
import React, { createContext, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState } from '../state/dataState';
import { pathState } from '../state/pathState';

const mergeWithOutputs = (modelData, config) => {
	const outputs = config.outputs.map((output, i) => {
		const { propertyId, fn, args } = output;

		const processedArgs = args.map(arg => {
			if (typeof arg === 'string' && arg.startsWith('./')) {
				const targetId = arg.slice(2);
				return modelData[targetId];
			}
			return arg;
		});

		return {
			propertyId,
			value: fn(...processedArgs)
		};
	});

	const returnValue = { ...modelData };
	outputs.forEach(o => {
		returnValue[o.propertyId] = o.value
	});

	return returnValue;
};

const getDataAtPath = (data, path) => {
	let node = null;
	let vars = {};

	node = path[path.length - 1].modelData;

	return [node, vars];
};

const getDataUtils = (path, data) => {

	const [modelData, vars] = getDataAtPath(data, path);

	// Get modelId of head, or top group if no path
	const modelId = path.length ? path[path.length - 1].modelId : modelData.modelId;

	return {
		// All data
		data,
		// Level data
		modelData,
		modelId,
		vars
	}
}

const DataContext = createContext(null);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
	const path = useRecoilValue(pathState);
	const [data, setData] = useRecoilState(dataState);

	const dataContext = getDataUtils(path, data, setData);

	console.log('dpb dataContext', dataContext);

	return (
		<DataContext.Provider value={dataContext}>
			{children}
		</DataContext.Provider>
	);
};
