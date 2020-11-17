import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import Fretboard from "../../../../viewers/Fretboard/Fretboard";
import Graph from "../../../../viewers/Graph/Graph";
import Keyboard from "../../../../viewers/Keyboard/Keyboard";
import Meter from "../../../../viewers/Meter/Meter";
import { VIEWERS } from "../../demos/BasicDemo";
import Subpanel from "../../Subpanel";






const ViewerBar = () => {
	const { viewer, setViewer } = usePodContext();
	const { isEditing } = useEditContext();

	const viewerDef = VIEWERS.find(p => p.id === viewer.id);

	return (
		<div className='input-bar'>
			<div>Viewer</div>
			{isEditing ?
				<DropdownInput options={VIEWERS} value={viewerDef} setValue={setViewer} />
				: viewer.name}
		</div>
	);
};

const ViewerBox = () => {
	const podContext = usePodContext();
	const ViewerComponent = podContext.viewer.component;

	return (
		<>
			<ViewerBar />
			<div className="viewer-box">
				<ViewerComponent podContext={podContext} />
			</div>
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
