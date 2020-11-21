import React from "react";
import { OutputContextProvider } from "../../../other/OutputContext";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";

const OutputPanel = ({ i, outputs, setOutputs }) => {
	const output = outputs[i];
	const setOutput = output => setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)])
	return (
		<OutputContextProvider output={output} setOutput={setOutput}>
			<Panel name="Outputs">
				<ViewerSubpanel />
			</Panel>
		</OutputContextProvider>
	);
}

export default OutputPanel;
