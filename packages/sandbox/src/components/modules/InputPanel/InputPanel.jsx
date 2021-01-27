import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import InputPresetBox from "./InputPresetBox";
import InputTransformBox from "./InputTransformBox";
import PodTable from "./table/PodTable";
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
			<PodTable />
		</Panel>
	);
};

export default InputPanel;
