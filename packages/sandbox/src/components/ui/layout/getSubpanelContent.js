import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import Table from "../Table";
import { getCaption, getName, getPreview } from './getPanelProps';

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
	const { root, intervals } = data;
	const props = [
		{
			title: 'Root',
			headers: ['Name', 'P', 'D', 'Freq'],
			rows: [{
				cols: [JSON.stringify(root), root[0], root[1], 'f']
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

export const getGroupTables = (data) => {
	const props = {
		headers: ['#', 'Name', 'Type', 'Preview'],
		rows: data.map((item, i) => {
			const { modelId, modelConfig, name } = item;
			return {
				cols: [
					i + 1,
					name || getName(modelConfig, modelId),
					getCaption(modelConfig, modelId),
					getPreview(modelConfig, modelId)
				]
			}
		})
	};
	return fromProps(props);
};

const getSubpanelContent = (data, modelId) => {
	if (!data) return "No Table Data";

	switch (modelId) {
	case MODEL_ID.Group:
		return getGroupTables(data);
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
	default:
		return null;
	}
};

export default getSubpanelContent;
