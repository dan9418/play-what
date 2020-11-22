import React from "react";
import { InputContextProvider } from "../../../other/InputContext";
import PodSubpanel from "../subpanels/pods/PodSubpanel";
import { NewSubpanelButton } from "../subpanels/Subpanel";
import Panel from "./Panel";

const InputPanel = ({ inputs, setInputs }) => {
	const onInsertBelow = () => setInputs([...inputs, inputs[inputs.length - 1]]);
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
			<NewSubpanelButton onClick={onInsertBelow} />
		</Panel>
	);
}

export default InputPanel;
