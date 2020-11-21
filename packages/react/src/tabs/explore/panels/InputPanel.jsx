import React from "react";
import { InputContextProvider } from "../../../other/InputContext";
import PodSubpanel from "../subpanels/pods/PodSubpanel";
import Panel from "./Panel";

const InputPanel = ({ i, inputs, setInputs }) => {
	const input = inputs[i];
	const setInput = input => setInputs([...inputs.slice(0, i), input, ...inputs.slice(i + 1)])

	return (
		<Panel name="Inputs">
			{inputs.map((input, i) => (
				<InputContextProvider key={i} input={input} setInput={setInput}>
					<PodSubpanel />
				</InputContextProvider>
			))}
		</Panel>
	);
}

export default InputPanel;
