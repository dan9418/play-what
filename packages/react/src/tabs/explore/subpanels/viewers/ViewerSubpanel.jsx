import React from "react";
import useEditContext from "../../../../other/EditContext";
import useOutputContext from "../../../../other/OutputContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import { VIEWERS } from "../../../../viewers/viewers";
import Subpanel from "../Subpanel";

const ViewerBar = () => {
	const { viewerDef, setViewerDef } = useOutputContext();
	const { isEditing } = useEditContext();

	return (
		<div className='input-bar'>
			<div>Component</div>
			{isEditing ?
				<DropdownInput options={VIEWERS} value={viewerDef} setValue={setViewerDef} />
				: viewerDef.name}
		</div>
	);
};

const ViewerBox = () => {

	const { viewerDef } = useOutputContext()
	const ViewerComponent = viewerDef.component;
	const PanelComponent = viewerDef.panelComponent;

	return (
		<>
			<ViewerBar />
			{PanelComponent && <PanelComponent />}
			<div className="viewer-box">
				<ViewerComponent {...{}} />
			</div>
		</>
	);
};


const ViewerSubpanel = () => {
	return (
		<Subpanel name="Viewer"  >
			<ViewerBox />
		</Subpanel>
	);
};

export default ViewerSubpanel;
