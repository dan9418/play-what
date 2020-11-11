import React from "react";
import Subpanel from "../../Subpanel";
import Meter from "./Analysis";

const AnalysisSubpanel = ({ value, type }) => {
	return (
		<Subpanel name="Analysis"  >
			<Meter value={value} type={type} />
		</Subpanel>
	);
};

export default AnalysisSubpanel;
