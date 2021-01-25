import React from "react";
import OutputPresetBox from "./output/OutputPresetBox";
import ViewerBox from "./output/ViewerBox";
import ViewerPropsBox from "./output/ViewerPropsBox";
import Panel from "./Panel";


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

	let caption = data.viewerId;
	let preview = data.inputId;
	let rightAction = null;

	return (
		<Panel name={data.name} caption={caption} preview={preview} leftActions={OUTPUT_ACTIONS} rightAction={rightAction}>
			<ViewerBox />
		</Panel>
	);
};

export default OutputPanel;
