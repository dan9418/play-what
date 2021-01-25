import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import InputPresetBox from "./input/InputPresetBox";
import InputTransformBox from "./input/InputTransformBox";
import InputTable from "./input/table/InputTable";
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

const InputPanel = ({ data }) => {

	let caption = data.podType;
	let preview = PodListUtils.getPreview(data[`${data.podType}s`], { podType: data.podType });
	let rightAction = null;

	return (
		<Panel name={data.name} caption={caption} preview={preview} leftActions={INPUT_ACTIONS} rightAction={rightAction}>
			<InputTable />
		</Panel>
	);
};

export default InputPanel;
