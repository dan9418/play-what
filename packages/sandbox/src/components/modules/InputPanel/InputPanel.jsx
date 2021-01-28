import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import styled from "styled-components";
import Panel from "../../core/Panel";
import PodTable from "./table/PodTable";

const StyledInputPanel = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
	}
	grid-gap: 16px;
`;

const InputPanel = ({ data, setData }) => {

	const { name, keyCenter, intervals, notes } = data;
	const caption = null;
	const preview = PodListUtils.getPreview(intervals, { podType: 'intervals' });

	const setKeyCenter = kc => setData({ ...data, keyCenter: kc[0] });
	const setIntervals = ivls => setData({ ...data, intervals: ivls });

	return (
		<Panel name={name} caption={caption} preview={preview}>
			<StyledInputPanel>
				<div>

				</div>
				<div>
					<PodTable name="Key Center" pods={[keyCenter]} setPods={setKeyCenter} podType="note" editable />
				</div>
				<div>
					<PodTable name="Notes" pods={notes} podType="note" />
				</div>
				<div>
					<PodTable name="Intervals" pods={intervals} setPods={setIntervals} podType="interval" editable />
				</div>
			</StyledInputPanel>
		</Panel>
	);
};

export default InputPanel;
