import React, { useState } from "react";
import { InputContextProvider } from "../../../contexts/InputContext";
import { OutputContextProvider } from "../../../contexts/OutputContext";
import EditBox from "./EditBox";
import PodTypeSwitch from "./input/PodTypeSwitch";
import InputPresetBox from "./input/InputPresetBox";
import InputTable from "./input/table/InputTable";
import ViewerBox from "./output/ViewerBox";
import Subpanel from "./Subpanel";
import OutputPresetBox from "./output/OutputPresetBox";
import InputSelector from "./output/InputSelector";
import ViewerPropsBox from "./output/ViewerPropsBox";
import PodListUtils from "@pw/core/src/PodList.utils";
import InputTransformBox from "./input/InputTransformBox";

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

const SubpanelDelegator = ({ data, setData, listType }) => {
	const [action, setAction] = useState(null);

	let Context = React.Fragment;
	let Content = React.Fragment;
	let caption = null;
	let preview = null;
	let leftActions = null;
	let rightAction = null;

	switch (listType) {
	case 'input': {
		Context = InputContextProvider;
		Content = InputTable;
		caption = data.podType;
		leftActions = INPUT_ACTIONS;
		rightAction = <PodTypeSwitch />;
		preview = PodListUtils.getPreview(data[`${data.podType}s`], { podType: data.podType })
		break;
	}
	case 'output': {
		Context = OutputContextProvider;
		Content = ViewerBox;
		caption = data.viewerId;
		leftActions = OUTPUT_ACTIONS;
		rightAction = <InputSelector />;
		preview = data.inputId;
		break;
	}
	}

	return (
		<Context data={data} setData={setData}>
			<Subpanel name={data.name} caption={caption} preview={preview}>
				<EditBox action={action} setAction={setAction} leftActions={leftActions} rightAction={rightAction} />
				<Content />
			</Subpanel>
		</Context>
	);
};

export default SubpanelDelegator;