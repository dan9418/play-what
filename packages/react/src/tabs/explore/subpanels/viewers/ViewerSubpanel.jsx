import React from "react";
import useEditContext from "../../../../other/EditContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import { VIEWERS } from "../../../../viewers/viewers";
import Subpanel from "../Subpanel";

const ViewerBar = () => {
	const { viewer, setViewer } = { viewer: VIEWERS[0] };
	const { isEditing } = useEditContext();

	const viewerDef = VIEWERS.find(p => p.id === viewer.id);

	return (
		<div className='input-bar'>
			<div>Component</div>
			{isEditing ?
				<DropdownInput options={VIEWERS} value={viewerDef} setValue={setViewer} />
				: viewer.name}
		</div>
	);
};

const ViewerBox = () => {

	const ViewerComponent = VIEWERS[0].component;
	const PanelComponent = VIEWERS[0].panelComponent;

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
