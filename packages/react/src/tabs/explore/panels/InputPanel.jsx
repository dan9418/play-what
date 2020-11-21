import React from "react";
import { InputContextProvider } from "../../../other/InputContext";
import PodSubpanel from "../subpanels/pods/PodSubpanel";
import Panel from "./Panel";

const InputPanel = ({ i, inputs, setInputs }) => {
	const input = inputs[i];
	const setInput = input => setInputs([...inputs.slice(0, i), input, ...inputs.slice(i + 1)])

	return (
		<InputContextProvider input={input} setInput={setInput}>
			<Panel name="Inputs">
				<PodSubpanel />
			</Panel>
		</InputContextProvider>
	);
}

export default InputPanel;
