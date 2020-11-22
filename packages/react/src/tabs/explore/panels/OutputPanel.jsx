import React from "react";
import { OutputContextProvider } from "../../../other/OutputContext";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";

const OutputPanel = ({ inputs, outputs, setOutputs }) => {
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
		</Panel>
	);
}

export default OutputPanel;
