import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import PodListRow from './PodListRow';
import PodRow from './PodRow';

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

const ValueRowManager = ({ value, type }) => {
	const editContext = useEditContext();
	const { isEditing } = editContext;
	/*if (value instanceof pw_core.PodIndex) {
		return (
			<PodIndexRow
				podIndex={value}
				setPodIndex={setValue}
				isEditing={isEditing}
			/>
		);
	}*/
	if (type === 'keyCenter') {
		return (
			<PodRow
				pod={value}
				setPod={null}
				type={type}
			/>
		);
	}
	else if (type === 'intervals' || type === 'notes') {
		const rows = value.map((v, i) => {
			return (
				<PodListRow
					i={i}
					key={i}
					podList={value}
					setPodList={null}
					type={type}
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
