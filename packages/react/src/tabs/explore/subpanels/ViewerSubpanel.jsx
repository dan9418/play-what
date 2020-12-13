import React from "react";
import useEditContext from "../../../other/EditContext";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";
import { VIEWER_VALUES } from "../../../viewers/viewers";
import Subpanel from "./Subpanel";

const ViewerBar = () => {
	const { isEditing } = useEditContext();

	return (
		<div className='input-bar'>
			<div>Component</div>
			{isEditing ?
				<DropdownInput options={VIEWER_VALUES} value={viewerDef} setValue={setViewerDef} />
				: viewerDef.name}
		</div>
	);
};

const ViewerBox = () => {

	const ViewerComponent = viewerDef.component;
	const PanelComponent = viewerDef.panelComponent;

	return (
		<>
			<ViewerBar />
			{PanelComponent && <PanelComponent />}
			<div className="viewer-box">
				<ViewerComponent {...viewerProps} />
			</div>
		</>
	);
};


const ViewerSubpanel = ({ name, outputs, setOutputs, i }) => {
	return (
		<Subpanel
			name={name}
			data={outputs}
			setData={setOutputs}
			i={i}
		>
			<ViewerBox />
		</Subpanel>
	);
};

export default ViewerSubpanel;
