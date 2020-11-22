import React from "react";
import useEditContext from "../../../other/EditContext";
import { OutputContextProvider } from "../../../other/OutputContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";


const SubpanelWrapper = ({ children, isLast }) => {
	const { isEditing } = useEditContext();
	return (
		<div className="subpanel-wrapper">
			{isEditing && <ButtonInput>+ Add</ButtonInput>}
			<div className="edit-wrapper">

				{children}

				{isEditing && <ButtonInput>X</ButtonInput>}
			</div>
			{isLast && isEditing && <ButtonInput>+ Add</ButtonInput>}
		</div>
	);
}


const OutputPanel = ({ inputs, outputs, setOutputs }) => {
	return (
		<Panel name="Outputs">
			{outputs.map((output, i) => {
				const setOutput = output => setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)]);
				return (
					<SubpanelWrapper key={i} isLast={i === output.length - 1}>
						<OutputContextProvider output={output} setOutput={setOutput} inputs={inputs}>
							<ViewerSubpanel name={`Out ${i + 1}`} />
						</OutputContextProvider>
					</SubpanelWrapper>
				);
			})}
		</Panel>
	);
}

export default OutputPanel;
