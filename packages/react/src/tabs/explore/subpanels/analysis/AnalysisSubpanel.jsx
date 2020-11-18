import React from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import INPUT from "../../../../ui/inputs";
import { VIEWERS } from "../../../../viewers/viewers";
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

const ViewerInputBars = ({ inputs }) => {
	const { viewer, setViewer, viewerProps, setViewerProps } = usePodContext();
	const { isEditing } = useEditContext();

	const viewerDef = VIEWERS.find(p => p.id === viewer.id);

	if (!viewer.inputs) return null;

	return viewer.inputs.map(input => {
		const InputComponent = INPUT[input.inputId].component;
		const value = viewerProps[input.id];
		return (
			<div key={input.id} className='input-bar'>
				<div>{input.name}</div>
				{isEditing ?
					<InputComponent value={value} {...input.inputProps} />
					: value}
			</div>
		);
	});
};

const ViewerBox = () => {
	const podContext = usePodContext();
	const ViewerComponent = podContext.viewer.component;

	return (
		<>
			<ViewerBar />
			<ViewerInputBars />
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
