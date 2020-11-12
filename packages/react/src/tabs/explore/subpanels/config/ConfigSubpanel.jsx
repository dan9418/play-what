import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import SwitchInput from "../../../../ui/SwitchInput/SwitchInput";
import Subpanel from "../../Subpanel";

const PodTypeBar = () => {
	const { value, podType, setPodType } = usePodContext();
	const { isEditing } = useEditContext();

	return (
		<div className='input-bar'>
			<div>Pod Type</div>
			{isEditing ?
				<DropdownInput options={[]} value={podType} setValue={setPodType} />
				: podType}
		</div>
	);
};

const ListBar = () => {
	const { value, setValue, isList, setIsList } = usePodContext();
	const { isEditing } = useEditContext();
	return (
		<>
			<div className='input-bar'>
				<div>List</div>
				{isEditing ?
					<SwitchInput value={isList} setValue={setIsList} />
					: (isList ? 'Y' : 'N')
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
