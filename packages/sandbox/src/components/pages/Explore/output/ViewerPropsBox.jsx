import { VIEWER } from "@pw/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { outputState } from "../../../../state/state";

const ViewerPropsBox = props => {
	const { viewerProps, viewerId } = useRecoilValue(outputState);

	const ViewerComponent = VIEWER[viewerId].panelComponent;

	return (
		ViewerComponent ?
			<ViewerComponent {...viewerProps} />
			: null
	);
};

export default ViewerPropsBox;
