import React from "react";
import useEditContext from "../../../other/EditContext";
import { OutputContextProvider } from "../../../other/OutputContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";
import * as Icon from '../../../../../sandbox/src/img/Icons';

const NewPod = ({ children }) => {
	const { isEditing } = useEditContext();
	if (!isEditing) return null;
	return (
		<div className="new-pod">
			<ButtonInput>+ Add</ButtonInput>
		</div>
	);
}

const SubpanelWrapper = ({ children, isLast }) => {
	const { isEditing } = useEditContext();
	return (
		<div className="subpanel-wrapper">
			<NewPod />
			<div className="edit-wrapper">
				{children}
				{isEditing &&
					<div className="v-button">
						<ButtonInput><Icon.Up /></ButtonInput>
						<ButtonInput><Icon.Delete /></ButtonInput>
						<ButtonInput><Icon.Down /></ButtonInput>
					</div>
				}
			</div>
			{isLast && <NewPod />}
		</div>
	);
}


const OutputPanel = ({ inputs, outputs, setOutputs }) => {
	return (
		<Panel name="Outputs">
			{outputs.map((output, i) => {
				const setOutput = output => setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)]);
				return (
					<SubpanelWrapper key={i} isLast={i === outputs.length - 1}>
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
