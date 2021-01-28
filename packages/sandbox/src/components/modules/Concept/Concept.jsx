import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import styled from "styled-components";
import Panel from "../../core/Panel";
import PodTable from "../PodList/PodTable";

const StyledInputPanel = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	
	> * {
		width: 100%;
		max-width: 512px;
		margin: 16px 0;
	}
	@media(min-width: 1024px) {
		
	}

`;

const Concept = ({ data, setData }) => {

	const { name, keyCenter, intervals, notes } = data;
	const caption = null;
	const preview = PodListUtils.getPreview(intervals, { podType: 'intervals' });

	const setKeyCenter = kc => setData({ ...data, keyCenter: kc[0] });
	const setIntervals = ivls => setData({ ...data, intervals: ivls });

	return (
		<Panel name={name} caption={caption} preview={preview}>
			<StyledInputPanel>

				<div>
					<PodTable name="Key Center" pods={[keyCenter]} setPods={setKeyCenter} podType="note" editable />
				</div>
				<div>
					<PodTable name="Intervals" pods={intervals} setPods={setIntervals} podType="interval" editable />
				</div>
				<div>
					<PodTable name="Notes" pods={notes} podType="note" />
				</div>

			</StyledInputPanel>
		</Panel>
	);
};

export default Concept;
