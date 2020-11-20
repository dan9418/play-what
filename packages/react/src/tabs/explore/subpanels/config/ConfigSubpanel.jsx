import React from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
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

const ConfigSubpanel = () => {
	return (
		<Subpanel name="Config" >
			<PodTypeBar />
		</Subpanel>
	);
};

export default ConfigSubpanel;
