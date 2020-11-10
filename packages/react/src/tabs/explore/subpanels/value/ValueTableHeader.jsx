import React from 'react';
import pw_core from '@pw/core';
import usePodContext from "../../../other/PodContext";

const getHeaders = (value, isEditing) => {
	if (value instanceof pw_core.PodIndex) {
		if (value instanceof pw_core.Degree)
			return ['PodIndex', 'Reduced', 'Preset'];
		if (value instanceof pw_core.Pitch)
			return ['PodIndex', 'Reduced', 'Preset'];
		return ['PodIndex', 'Reduced', 'Preset'];
	}
	else if (value instanceof pw_core.Pod) {
		if (value instanceof pw_core.Interval)
			return ['Pod', 'Reduced', 'Preset'];
		if (value instanceof pw_core.Note)
			return ['Pod', 'Reduced', 'Preset'];
		return ['PodIndex', 'Reduced', 'Preset'];
	}
	else if (value instanceof pw_core.PodList) {
		if (value instanceof pw_core.Chord)
			return ['#', 'Pod', 'Reduced', 'Preset', isEditing ? 'Delete' : undefined];
		if (value instanceof pw_core.Scale)
			return ['#', 'Pod', 'Reduced', 'Preset', isEditing ? 'Delete' : undefined];
		return ['#', 'Pod', 'Reduced', , 'Preset', isEditing ? 'Delete' : undefined];
	}
	else
		return [];
}

const ValueTableHeader = ({ isEditing }) => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	const headers = getHeaders(value, isEditing);

	return (
		<thead>
			<tr>
				{headers.map(h => <th key={h}>{h}</th>)}
			</tr>
		</thead>
	);
};

export default ValueTableHeader;
