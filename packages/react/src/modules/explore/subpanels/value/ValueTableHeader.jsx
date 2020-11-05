import React from 'react';
import pw_core from '@pw/core';
import usePodContext from "../../../other/PodContext";

const ValueTableHeader = ({ isEditing }) => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;
	if (value instanceof pw_core.PodIndex)
		return (
			<thead>
				<tr>
					<th>PodIndex</th>
					<th>Reduced</th>
				</tr>
			</thead>
		);
	else if (value instanceof pw_core.Pod)
		return (
			<thead>
				<tr>
					<th>Pod</th>
					<th>Reduced</th>
				</tr>
			</thead>
		);
	else if (value instanceof pw_core.PodList)
		return (
			<thead>
				<tr>
					<th>#</th>
					<th>Pod</th>
					<th>Reduced</th>
					<th>
						Preset
					</th>
					{isEditing && (
						<>
							<th>
									Delete
							</th>
							<th>
									Order
							</th>
						</>
					)}
				</tr>
			</thead>
		);
	return JSON.stringify(value);
};

export default ValueTableHeader;
