import React, { useState } from "react";
import usePodContext from "../../../other/PodContext";
import EditDash from '../../EditDash';
import Meter from "./Analysis";

const AnalysisSubpanel = () => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className='subpanel'>
			<EditDash name="Analysis" isEditing={isEditing} setIsEditing={setIsEditing} />
			<div>
				<Meter value={value} />
			</div>
		</div>
	);
};

export default AnalysisSubpanel;
