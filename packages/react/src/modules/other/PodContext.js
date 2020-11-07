import React, { createContext, useContext } from 'react';
import pw_core from "@pw/core";

const PodContext = createContext(null);

export const STRUCTURES = [
	{
		id: 'podIndex',
		name: 'podIndex',
		cl: pw_core.PodIndex,
		defaultValue: 0
	},
	{
		id: 'pod',
		name: 'pod',
		cl: pw_core.Pod,
		defaultValue: [0, 0]
	},
	{
		id: 'podList',
		name: 'podList',
		cl: pw_core.PodList,
		defaultValue: [[0, 0], [0, 0]]
	}
];

export const MODELS = {
	podIndex: [
		{
			id: 'pitch',
			name: 'pitch',
			cl: pw_core.Pitch,
			defaultValue: pw_core.Pitch.presetValues[0].value
		},
		{
			id: 'degree',
			name: 'degree',
			cl: pw_core.Degree,
			defaultValue: pw_core.Degree.presetValues[0].value
		}
	],
	pod: [
		{
			id: 'note',
			name: 'note',
			cl: pw_core.Note,
			defaultValue: pw_core.Note.presetValues[0].value
		},
		{
			id: 'interval',
			name: 'interval',
			cl: pw_core.Interval,
			defaultValue: pw_core.Interval.presetValues[0].value
		}
	],
	podList: [
		{
			id: 'chord',
			name: 'chord',
			cl: pw_core.Chord,
			defaultValue: pw_core.Chord.presetValues[0].value
		},
		{
			id: 'scale',
			name: 'scale',
			cl: pw_core.Scale,
			defaultValue: pw_core.Scale.presetValues[0].value
		}
	]
};

const getStructure = (value) => {
	return STRUCTURES.find(s => value instanceof s.cl);
}

const getModel = (structure, value) => {
	return MODELS[structure.id].find(m => value instanceof m.cl) || MODELS[structure.id][0];
}

const getPreset = (value, presets = []) => {
	return presets.find(p => value.equalTo(p.value)) || null;
}

export const PodContextProvider = ({
	value,
	setValue,
	podType,
	setPodType,
	children
}) => {

	const structure = getStructure(value);
	const model = getModel(structure, value);
	const safe = model || structure;
	const preset = getPreset(value, safe.cl.presetValues);

	const podContext = {
		value,
		setValue,
		podType,
		setPodType,
		structure,
		model,
		preset
	};

	return (
		<PodContext.Provider value={podContext}>
			{children}
		</PodContext.Provider>
	);
}

const usePodContext = () => useContext(PodContext);

export default usePodContext;
