import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import Meter from "../../../../viewers/Meter/Meter";
import Subpanel from "../../Subpanel";

const VIEWERS = [
	{
		id: 'meter',
		name: 'Meter',
		component: Meter
	}
];

const ViewerBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [viewer, setViewer] = useState(VIEWERS[0]);
	const podContext = usePodContext();
	const { value, setValue, podType, isList } = podContext;
	const { isEditing } = useEditContext();
	const ViewerComponent = viewer.component;
	const setHelper = v => setValue(v.value);
	return (
		<>
			{isEditing && <DropdownInput options={VIEWERS} value={viewer} setValue={setViewer} />}
			<ViewerComponent {...podContext} />
		</>
	);
};

const AnalysisSubpanel = () => {
	return (
		<Subpanel name="Analysis"  >
			<ViewerBox />
		</Subpanel>
	);
};

export default AnalysisSubpanel;
