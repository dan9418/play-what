import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import React from "react";
import styled from "styled-components";
import Panel from "../../ui/Panel";
import PodSubpanel from "../Pod/PodSubpanel";
import PodListSubpanel from "../PodList/PodListSubpanel";
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

const Concept = ({ keyCenter, setKeyCenter, intervals, setIntervals }) => {

	const notes = PodUtils.addPodList(keyCenter, intervals);
	const preview = PodListUtils.getPreview(notes, { podType: 'note' });

	return (
		<Panel name="Concept" caption={"caption"} preview={preview}>
			<StyledInputPanel>
				<PodSubpanel pod={keyCenter} setPod={setKeyCenter} />
				<PodListSubpanel pods={intervals} setPods={setIntervals} />
				<PodListSubpanel pods={notes} />
			</StyledInputPanel>
		</Panel>
	);
};

export default Concept;
