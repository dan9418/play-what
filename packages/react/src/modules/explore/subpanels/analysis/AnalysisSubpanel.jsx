import React, { useState } from "react";
import usePodContext from "../../../other/PodContext";
import Subpanel from "../../Subpanel";
import Meter from "./Analysis";

const AnalysisSubpanel = () => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);

	return (
		<Subpanel name="Analysis" isEditing={isEditing} setIsEditing={setIsEditing} >
			<div>
				<Meter value={value} />
			</div>
		</Subpanel>
	);
};

export default AnalysisSubpanel;
