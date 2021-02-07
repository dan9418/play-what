import React from 'react';
import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import Table from "../ui/Table";
import { MODEL_ID } from "./MODEL";

const fromProps = (props) => {
	if (!props) return null;
	const data = Array.isArray(props) ? props : [props];
	return data.map((d, i) => <Table key={i} {...d} />);
}

export const getPitchTables = (data) => {
	const props = {
		headers: ['Model', 'Value'],
		rows: [{
			cols: ['Pitch', data]
		}]
	};
	return fromProps(props);
};

export const getDegreeTables = (data) => {
	const props = {
		headers: ['Model', 'Value'],
		rows: [{
			cols: ['Degree', data]
		}]
	};
	return fromProps(props);
};

export const getNoteTables = (data) => {
	const props = {
		headers: ['Name', 'P', 'D', 'Freq'],
		rows: [{
			cols: [JSON.stringify(data), data[0], data[1], 'f']
		}]
	};
	return fromProps(props);
};

export const getIntervalTables = (data) => {
	const props = {
		headers: ['Name', 'P', 'D', 'Ratio'],
		rows: [{
			cols: [JSON.stringify(data), data[0], data[1], '1:n']
		}]
	};
	return fromProps(props);
};

export const getChordTables = (data) => {
	const props = {
		headers: ['Name', 'P', 'D'],
		rows: data.map((pod, i) => ({
			cols: [JSON.stringify(pod), pod[0], pod[1]]
		}))
	};
	return fromProps(props);
};

export const getScaleTables = (data) => {
	const props = {
		headers: ['Name', 'P', 'D'],
		rows: data.map((pod, i) => ({
			cols: [JSON.stringify(pod), pod[0], pod[1]]
		}))
	};
	return fromProps(props);
};

export const getRelativeChordTables = (data) => {
	const { keyCenter, intervals } = data;
	const props = [
		{
			title: 'Key Center',
			headers: ['Name', 'P', 'D', 'Freq'],
			rows: [{
				cols: [JSON.stringify(keyCenter), keyCenter[0], keyCenter[1], 'f']
			}]
		},
		{
			title: 'Intervals',
			headers: ['Name', 'P', 'D'],
			rows: intervals.map((pod, i) => ({
				cols: [JSON.stringify(pod), pod[0], pod[1]]
			}))
		}
	];
	return fromProps(props);
};

export const getSectionTables = (data) => {
	//const props = data.items.map((block, i) => null);
	return fromProps(null);
};

export const getChartTables = (data) => {
	return null;
	/*const props = {
		headers: ['Name', 'P', 'D'],
		rows: data.map((pod, i) => ({
			cols: [JSON.stringify(pod), pod[0], pod[1]]
		}))
	};
	return fromProps(props);*/
};

const getTables = (data, modelId) => {
	if (!data) return "No Data";

	switch (modelId) {
	case MODEL_ID.Pitch:
		return getPitchTables(data);
	case MODEL_ID.Degree:
		return getDegreeTables(data);
	case MODEL_ID.Note:
		return getNoteTables(data);
	case MODEL_ID.Interval:
		return getIntervalTables(data);
	case MODEL_ID.NoteChord:
	case MODEL_ID.IntervalChord:
		return getChordTables(data);
	case MODEL_ID.NoteScale:
	case MODEL_ID.IntervalScale:
		return getScaleTables(data);
	case MODEL_ID.RelativeChord:
		return getRelativeChordTables(data);
	case MODEL_ID.Section:
		return getSectionTables(data);
	case MODEL_ID.Chart:
		return getChartTables(data);
	default:
		return JSON.stringify(data);
	}
};

export default getTables;
