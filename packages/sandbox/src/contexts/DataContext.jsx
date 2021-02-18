
import { MODEL, MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import { STRUCT_ID } from '@pw/core/src/models/helpers/Struct.constants';
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
	let node = data;
	let vars = data.vars || {};

	for (let i = 0; i < path.length; i++) {
		const target = path[i];
		const parent = i === 0 ? null : path[i -1];

		console.log('dpb', i, target.pathId, node);

		const modelId = parent ? parent.modelId : MODEL_ID.Group;
		const model = MODEL[modelId];

		if (model.structId === STRUCT_ID.Group) {
			node = node.groupItems[target.pathId].groupItemData;
		}
		else if (model.structId === STRUCT_ID.Object) {
			node = node[target.pathId];
		}
		else {
			console.error('UNKNOWN STRUCT_ID', model.structId);
		}

		if (typeof node === undefined || node === null)
			console.error('UNDEFINED NODE', 'path', path, 'data', data, pathHead);
	}

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
