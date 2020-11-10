import React from 'react';
import usePodContext from '../../../../../other/PodContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import PodIndexRow from './PodIndexRow';
import PodRow from './PodRow';
import PodListRow from './PodListRow';
import pw_core from '@pw/core';

const NewModelRow = ({ }) => {
	return (
		<tr key="new">
			<td colSpan="3" />
			<td>
				Add
			</td>
			<td>
				<ButtonInput onClick={null}>+</ButtonInput>
			</td>
		</tr>
	);
};

const ValueRowManager = ({ isEditing }) => {
	const podContext = usePodContext();
	const { value, setValue, model, preset, podType } = podContext;

	if (value instanceof pw_core.PodIndex) {
		return (
			<PodIndexRow
				podIndex={value}
				setPodIndex={setValue}
				isEditing={isEditing}
			/>
		);
	}
	else if (value instanceof pw_core.Pod) {
		return (
			<PodRow
				pod={value}
				setPod={setValue}
				isEditing={isEditing}
			/>
		);
	}
	else if (value instanceof pw_core.PodList) {
		const rows = value.getValue().map((v, i) => {
			return (
				<PodListRow
					value={value}
					setValue={setValue}
					isEditing={isEditing}
					i={i}
					key={i}
					model={model}
					preset={preset}
					podType={podType}
				/>
			);
		});
		return [...rows, isEditing ? <NewModelRow /> : null]
	}
	else {
		return <tr><td colSpan="100">{JSON.stringify(value)}</td></tr>
	}
};

export default ValueRowManager;
