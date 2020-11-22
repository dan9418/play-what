import React from "react";
import { InputContextProvider } from "../../../other/InputContext";
import PodSubpanel from "../subpanels/pods/PodSubpanel";
import Panel from "./Panel";

const InputPanel = ({ inputs, setInputs }) => {
	return (
		<Panel name="Inputs">
			{inputs.map((input, i) => {
				const setInput = input => setInputs([...inputs.slice(0, i), input, ...inputs.slice(i + 1)])
				return (
					<InputContextProvider key={i} input={input} setInput={setInput}>
						<PodSubpanel name={`In ${i + 1}`} i={i} inputs={inputs} setInputs={setInputs} />
					</InputContextProvider>
				)
			})}
		</Panel>
	);
}

export default InputPanel;
