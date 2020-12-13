import React from "react";
import useEditContext from "../../../other/EditContext";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";
import { VIEWER_VALUES } from "../../../viewers/viewers";
import Subpanel from "../Subpanel";

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

const ViewerBox = ({ defaultProps, component }) => {

	const ViewerComponent = component;

	return (
		<>
			<div className="viewer-box">
				<ViewerComponent {...defaultProps} />
			</div>
		</>
	);
};


const OutputSubpanel = ({ name, data, setData, i }) => {
	return (
		<Subpanel
			name={name}
			data={data}
			setData={setData}
			i={i}
		>
			<ViewerBox {...data.value} />
		</Subpanel>
	);
};

export default OutputSubpanel;
