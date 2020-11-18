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

const ViewerInputBars = () => {
	const { viewer, setViewer, viewerProps, setViewerProps } = usePodContext();
	const { isEditing } = useEditContext();

	if (!viewer.props) return null;

	console.log('dpb', viewer)

	return viewer.props.map(input => {
		const InputComponent = INPUT[input.inputId].component;
		const value = viewerProps[input.id];
		const setValue = v => setViewerProps({ ...viewerProps, [input.id]: v });
		return (
			<div key={input.id} className='input-bar'>
				<div>{input.name}</div>
				{isEditing ?
					<InputComponent value={value} setValue={setValue} {...input.inputProps} />
					: value}
			</div>
		);
	});
};

const ViewerBox = () => {
	const podContext = usePodContext();
	const { viewer, setViewer, viewerProps, setViewerProps } = podContext;
	const ViewerComponent = podContext.viewer.component;

	return (
		<>
			<ViewerBar />
			<ViewerInputBars />
			<div className="viewer-box">
				<ViewerComponent {...viewerProps} />
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
