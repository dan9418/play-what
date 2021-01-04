import { COLOR_FN_INTERVAL, COLOR_FN_INTERVAL_VALUES, COLOR_FN_NOTE, COLOR_FN_NOTE_VALUES } from '@pw/core/src/Color.constants';
import { LABEL_FN_INTERVAL_VALUES, LABEL_FN_NOTE_VALUES } from '@pw/core/src/Label.constants';
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
		if (k === 'colorSource') {
			newProps.colorFn = v === 'intervals' ? COLOR_FN_INTERVAL_VALUES[0].value : COLOR_FN_NOTE_VALUES[0].value;
		}
		if (k === 'labelSource') {
			newProps.labelFn = v === 'intervals' ? LABEL_FN_INTERVAL_VALUES[0].value : LABEL_FN_NOTE_VALUES[0].value;
		}
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
