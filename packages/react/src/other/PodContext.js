import React, { createContext, useContext, useState } from 'react';
import pw_core from "@pw/core";

const PodContext = createContext(null);

//const DEFAULT_VALUE = new pw_core.PodIndex(0);
//const DEFAULT_VALUE = new pw_core.Pod([0, 0]);
const DEFAULT_VALUE = new pw_core.PodList([[0, 0], [1, 1]]);

export const STRUCTURES = [
	{
		id: 'podIndex',
		name: 'podIndex',
		cl: pw_core.PodIndex,
		defaultValue: 0,
		models: [
			{
				id: 'podIndex',
				name: 'podIndex',
				cl: pw_core.PodIndex,
				defaultValue: 0
			},
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
		]
	},
	{
		id: 'pod',
		name: 'pod',
		cl: pw_core.Pod,
		defaultValue: [0, 0],
		models: [
			{
				id: 'pod',
				name: 'pod',
				cl: pw_core.Pod,
				defaultValue: [0, 0]
			},
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
		]
	},
	{
		id: 'podList',
		name: 'podList',
		cl: pw_core.PodList,
		defaultValue: [[0, 0], [0, 0]],
		models: [
			{
				id: 'podList',
				name: 'podList',
				cl: pw_core.PodList,
				defaultValue: [[0, 0], [0, 0]]
			},
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
	}
];

const getStructure = (value) => {
	return STRUCTURES.find(s => value instanceof s.cl);
}

const getModel = (structure, value) => {
	return structure.models.find(m => value.getType() === m.id);
}

const getPreset = (value, presets = []) => {
	return presets.find(p => value.equalTo(p.value)) || null;
}

export const PodContextProvider = ({ children }) => {

	const [value, setValue] = useState(DEFAULT_VALUE);
	const [podType, setPodType] = useState(STRUCTURES[1].models[0]);
	const [breadcrumbs, setBreadcrumbs] = useState(['cell']);
	const pushBreadcrumb = b => setBreadcrumbs([...breadcrumbs, b]);
	const popBreadcrumb = () => setBreadcrumbs(breadcrumbs.slice(0, breadcrumbs.length - 1));

	const structure = getStructure(value);
	const model = getModel(structure, value);
	const preset = getPreset(value, model.cl.presetValues);

	const podContext = {
		value,
		setValue,
		podType,
		setPodType,
		// computed
		structure,
		model,
		preset,
		// breadcrumbs
		breadcrumbs,
		pushBreadcrumb,
		popBreadcrumb
	};

	return (
		<PodContext.Provider value={podContext}>
			{children}
		</PodContext.Provider>
	);
}

const usePodContext = () => useContext(PodContext);

export default usePodContext;
