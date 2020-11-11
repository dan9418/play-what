import React from "react";
import useCellContext from "../../../other/CellContext";
import Panel from "../Panel";
import AnalysisSubpanel from "../subpanels/analysis/AnalysisSubpanel";
import ValueSubpanel from "../subpanels/value/ValueSubpanel";

const TYPE = 'intervalList';

const IntervalsPanel = () => {
	const cellContext = useCellContext();
	const { intervals } = cellContext.cell;
	return (
		<Panel name="Name" type={TYPE}>
			<AnalysisSubpanel value={intervals} type={TYPE} />
			<ValueSubpanel value={intervals} type={TYPE} />
		</Panel>
	);
}

export default IntervalsPanel;
