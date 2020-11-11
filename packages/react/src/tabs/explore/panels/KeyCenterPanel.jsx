import React from "react";
import useCellContext from "../../../other/CellContext";
import Panel from "../Panel";
import AnalysisSubpanel from "../subpanels/analysis/AnalysisSubpanel";
import ValueSubpanel from "../subpanels/value/ValueSubpanel";

const TYPE = 'keyCenter';

const KeyCenterPanel = () => {
	const cellContext = useCellContext();
	const { keyCenter } = cellContext.cell;
	return (
		<Panel name="Name" type="pod">
			<AnalysisSubpanel value={keyCenter} type={TYPE} />
			<ValueSubpanel value={keyCenter} type={TYPE} />
		</Panel>
	);
}

export default KeyCenterPanel;
