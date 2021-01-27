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

const InputPanel = ({ data }) => {

	const { name, keyCenter, intervals, notes } = data;
	const caption = null;
	const preview = PodListUtils.getPreview(intervals, { podType: 'intervals' });

	return (
		<Panel name={name} caption={caption} preview={preview}>
			<StyledInputPanel>
				<div>

				</div>
				<div>
					<PodTable name="Key Center" pods={[keyCenter]} podType="note" editable />
				</div>
				<div>
					<PodTable name="Notes" pods={notes} podType="note" />
				</div>
				<div>
					<PodTable name="Intervals" pods={intervals} podType="interval" editable />
				</div>
			</StyledInputPanel>
		</Panel>
	);
};

export default InputPanel;
