import PodListUtils from "@pw/core/src/PodList.utils";
import React, { useState } from "react";
import EditBox from "./EditBox";
import InputPresetBox from "./input/InputPresetBox";
import InputTransformBox from "./input/InputTransformBox";
import InputTable from "./input/table/InputTable";
import OutputPresetBox from "./output/OutputPresetBox";
import ViewerBox from "./output/ViewerBox";
import ViewerPropsBox from "./output/ViewerPropsBox";
import Panel from "./Panel";

const INPUT_ACTIONS = [
	{
		id: 'preset',
		text: 'Import Preset',
		component: <InputPresetBox />
	},
	{
		id: 'transform',
		text: 'Transform',
		component: <InputTransformBox />
	}
];

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

const PanelDelegator = ({ data, setData, listType }) => {
	const [action, setAction] = useState(null);

	let Content = React.Fragment;
	let caption = null;
	let preview = null;
	let leftActions = null;
	let rightAction = null;

	switch (listType) {
	case 'input': {
		Content = InputTable;
		caption = data.podType;
		leftActions = INPUT_ACTIONS;
		preview = PodListUtils.getPreview(data[`${data.podType}s`], { podType: data.podType })
		break;
	}
	case 'output': {
		Content = ViewerBox;
		caption = data.viewerId;
		leftActions = OUTPUT_ACTIONS;
		preview = data.inputId;
		break;
	}
	}

	return (

		<Panel name={data.name} caption={caption} preview={preview}>
			<EditBox action={action} setAction={setAction} leftActions={leftActions} rightAction={rightAction} />
			<Content />
		</Panel>

	);
};

export default PanelDelegator;
