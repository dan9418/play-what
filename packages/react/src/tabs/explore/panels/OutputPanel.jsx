import React from "react";
import { OutputContextProvider } from "../../../other/OutputContext";
import { NewSubpanelButton } from "../subpanels/Subpanel";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";

const OutputPanel = ({ inputs, outputs, setOutputs }) => {
	const onInsertBelow = () => setOutputs([...outputs, outputs[outputs.length - 1]]);
	return (
		<Panel name="Outputs">
			{outputs.map((output, i) => {
				const setOutput = output => setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)]);
				const isLast = i === outputs.length - 1;
				return (
					<OutputContextProvider key={i} output={output} setOutput={setOutput} inputs={inputs}>
						<ViewerSubpanel i={i} name={`Out ${i + 1}`} outputs={outputs} setOutputs={setOutputs} />
					</OutputContextProvider>
				);
			})}
			<NewSubpanelButton onClick={onInsertBelow} />
		</Panel>
	);
}

export default OutputPanel;
