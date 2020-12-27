import { VIEWER } from "@pw/react";
import React from "react";
import useOutputContext from "../../../../contexts/OutputContext";

const ViewerPropsBox = () => {
	const { viewerProps, viewerId } = useOutputContext();

	const ViewerComponent = VIEWER[viewerId].panelComponent;

	return (
		ViewerComponent ?
			<ViewerComponent {...viewerProps} />
			: null
	);
};

export default ViewerPropsBox;
