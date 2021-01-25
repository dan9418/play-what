import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import InputPresetBox from "./input/InputPresetBox";
import InputTransformBox from "./input/InputTransformBox";
import InputTable from "./input/table/InputTable";
import Panel from "../../core/Panel";

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

	const { name, keyCenter, intervals, notes } = data;
	const caption = null;
	const preview = PodListUtils.getPreview(intervals, { podType: 'intervals' });
	const rightAction = null;

	return (
		<Panel name={name} caption={caption} preview={preview} leftActions={INPUT_ACTIONS} rightAction={rightAction}>
			<InputTable />
		</Panel>
	);
};

export default InputPanel;
