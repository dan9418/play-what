import React from "react";
import { NewSubpanelButton } from "../subpanels/Subpanel";
import ViewerSubpanel from "../subpanels/ViewerSubpanel";
import Panel from "./Panel";

const OutputPanel = () => {
	const onInsertBelow = () => setOutputs([...outputs, outputs[outputs.length - 1]]);
	return (
		<Panel name="Outputs">
			{outputs.map((output, i) => {
				const setOutput = output => setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)]);
				const isLast = i === outputs.length - 1;
				return (
					<ViewerSubpanel key={i} i={i} name={output.name} outputs={outputs} setOutputs={setOutputs} />
				);
			})}
			<NewSubpanelButton onClick={onInsertBelow} />
		</Panel>
	);
}

export default OutputPanel;
