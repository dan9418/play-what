import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import styled from "styled-components";
import Panel from "../../ui/Panel";
import PodListTable from "../PodList/PodListTable";

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

const Concept = ({ keyCenter, setKeyCenter, intervals, setIntervals, name, caption }) => {

	const preview = PodListUtils.getPreview(intervals, { podType: 'intervals' });
	const notes = PodUtils.addPodList(keyCenter, intervals);

	return (
		<Panel name={name} caption={caption} preview={preview}>
			<StyledInputPanel>
				<div>
					<PodListTable name="Key Center" pods={[keyCenter]} setPods={pods => setKeyCenter(pods[0])} podType="note" editable />
				</div>
				<div>
					<PodListTable name="Intervals" pods={intervals} setPods={setIntervals} podType="interval" editable />
				</div>
				<div>
					<PodListTable name="Notes" pods={notes} podType="note" />
				</div>
			</StyledInputPanel>
		</Panel>
	);
};

export default Concept;
