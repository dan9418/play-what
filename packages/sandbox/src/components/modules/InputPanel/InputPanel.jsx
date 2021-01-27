import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import Panel from "../../core/Panel";
import PodTable from "./table/PodTable";

const InputPanel = ({ data }) => {

	const { name, keyCenter, intervals, notes } = data;
	const caption = null;
	const preview = PodListUtils.getPreview(intervals, { podType: 'intervals' });

	return (
		<Panel name={name} caption={caption} preview={preview}>
			<PodTable name="Key Center" pods={[keyCenter]} podType="note" editable />
			<PodTable name="Intervals" pods={intervals} podType="interval" editable />
			<PodTable name="Notes" pods={notes} podType="note" />
		</Panel>
	);
};

export default InputPanel;
