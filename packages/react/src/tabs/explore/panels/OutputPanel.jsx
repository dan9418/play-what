import React, { useState } from "react";
import { OutputContextProvider } from "../../../other/OutputContext";
import { NewSubpanelButton } from "../subpanels/Subpanel";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";
import { VIEWER } from '../../../viewers/viewers';

const OUTPUT_1 = {
	id: 'output1',
	name: 'Guitar',
	value: {
		viewerDef: VIEWER.fretboard,
		viewerProps: VIEWER.fretboard.defaultProps
	}
};

const OUTPUT_2 = {
	id: 'output1',
	name: 'Keyboard',
	value: {
		viewerDef: VIEWER.keyboard,
		viewerProps: VIEWER.keyboard.defaultProps
	}
};

const OUTPUT_3 = {
	id: 'output3',
	name: 'Table',
	value: {
		viewerDef: VIEWER.table,
		viewerProps: VIEWER.table.defaultProps
	}
};

const OUTPUTS = [OUTPUT_3, OUTPUT_1, OUTPUT_2];

const OutputPanel = ({ frame }) => {
	const [outputs, setOutputs] = useState(OUTPUTS)
	const onInsertBelow = () => setOutputs([...outputs, outputs[outputs.length - 1]]);
	return (
		<Panel name="Outputs">
			{outputs.map((output, i) => {
				const setOutput = output => setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)]);
				const isLast = i === outputs.length - 1;
				return (
					<OutputContextProvider key={i} output={output} setOutput={setOutput} frame={frame}>
						<ViewerSubpanel i={i} name={output.name} outputs={outputs} setOutputs={setOutputs} />
					</OutputContextProvider>
				);
			})}
			<NewSubpanelButton onClick={onInsertBelow} />
		</Panel>
	);
}

export default OutputPanel;
