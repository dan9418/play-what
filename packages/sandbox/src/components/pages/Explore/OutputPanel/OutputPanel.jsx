import React from "react";
import OutputPresetBox from "./OutputPresetBox";
import ViewerBox from "./ViewerBox";
import ViewerPropsBox from "./ViewerPropsBox";
import Panel from "../../../ui/Panel";

const OUTPUT_ACTIONS = [
	{
		id: 'viewer',
		text: 'Change Viewer',
		component: <OutputPresetBox />
	},
	{
		id: 'configure',
		text: 'Configure Viewer',
		component: <ViewerPropsBox />
	}
];

const OutputPanel = ({ data }) => {

	const { name, viewerId, viewerProps } = data;
	const caption = viewerId;
	const preview = null;
	const rightAction = null;

	return (
		<Panel name={name} caption={caption} preview={preview} leftActions={OUTPUT_ACTIONS} rightAction={rightAction}>
			<ViewerBox />
		</Panel>
	);
};

export default OutputPanel;
