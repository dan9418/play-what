import React from "react";
import Subpanel from "../../Subpanel";
import ValueTable from "./ValueTable";

const ValueSubpanel = ({ value, type }) => {
	return (
		<Subpanel name="Value" >
			<ValueTable value={value} type={type} />
		</Subpanel>
	);
};

export default ValueSubpanel;
