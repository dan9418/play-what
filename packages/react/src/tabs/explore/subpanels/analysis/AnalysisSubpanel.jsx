import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import Fretboard from "../../../../viewers/Fretboard/Fretboard";
import Keyboard from "../../../../viewers/Keyboard/Keyboard";
import Meter from "../../../../viewers/Meter/Meter";
import Subpanel from "../../Subpanel";

const VIEWERS = [
	{
		id: 'meter',
		name: 'Meter',
		component: Meter
	},
	{
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard
	},
	{
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard
	}
];

const ViewerBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [viewer, setViewer] = useState(VIEWERS[2]);
	const podContext = usePodContext();
	const { value, setValue, podType, isList } = podContext;
	const { isEditing } = useEditContext();
	const ViewerComponent = viewer.component;
	const setHelper = v => setValue(v.value);
	return (
		<>
			{isEditing && (
				<div className="viewer-box">
					<label>Viewer:</label>
					<DropdownInput options={VIEWERS} value={viewer} setValue={setViewer} />
				</div>
			)}
			<ViewerComponent podContext={podContext} />
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
