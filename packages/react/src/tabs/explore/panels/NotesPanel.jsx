import React from "react";
import useCellContext from "../../../other/CellContext";
import Panel from "../Panel";
import AnalysisSubpanel from "../subpanels/analysis/AnalysisSubpanel";
import ValueSubpanel from "../subpanels/value/ValueSubpanel";

const TYPE = 'noteList';

const NotesPanel = () => {
	const cellContext = useCellContext();
	const { notes } = cellContext.cell;
	return (
		<Panel name="Name" type={TYPE}>
			<AnalysisSubpanel value={notes} type={TYPE} />
			<ValueSubpanel value={notes} type={TYPE} />
		</Panel>
	);
}

export default NotesPanel;
