import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import SwitchInput from "../../../../ui/SwitchInput/SwitchInput";
import Subpanel from "../../Subpanel";

const POD_TYPES = [
	{
		id: 'pod',
		name: 'Pod'
	},
	{
		id: 'note',
		name: 'Note'
	},
	{
		id: 'interval',
		name: 'Interval'
	}
];

const PodTypeBar = () => {
	const { podType, setPodType } = usePodContext();
	const { isEditing } = useEditContext();

	const podTypeDef = POD_TYPES.find(p => p.id === podType);

	return (
		<div className='input-bar'>
			<div>Pod Type</div>
			{isEditing ?
				<DropdownInput options={POD_TYPES} value={podTypeDef} setValue={t => setPodType(t.id)} />
				: podType}
		</div>
	);
};

const ListBar = () => {
	const { value, setValue, isList, setIsList } = usePodContext();
	const { isEditing } = useEditContext();

	const setHelper = v => {
		setIsList(v);
		setValue(v ? [value] : value[0]);
	}

	return (
		<>
			<div className='input-bar'>
				<div>List</div>
				{isEditing ?
					<SwitchInput value={isList} setValue={setHelper} />
					: JSON.stringify(isList)
				}
			</div>
		</>
	);
};

const ConfigSubpanel = () => {
	return (
		<Subpanel name="Config" >
			<PodTypeBar />
			<ListBar />
		</Subpanel>
	);
};

export default ConfigSubpanel;
