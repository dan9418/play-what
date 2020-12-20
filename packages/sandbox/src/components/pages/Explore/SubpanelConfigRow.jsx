import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import React from "react";
import styled from 'styled-components';
import InputSubpanelContent from "./input/InputSubpanelContent";
import ViewerBox from "./output/ViewerBox";

const StyledSubpanelConfigRow = styled.div`
	display: flex;
    width: 100%;
    justify-content: center;
	align-items: center;
	margin: 16px 0;
`;

const SubpanelConfigRow = ({ dataList, setDataList, name, i, panelMode, isLast }) => {
	let SubpanelComponent = InputSubpanelContent;
	if (panelMode === 'output') {
		SubpanelComponent = ViewerBox;
	}
	return (
		<StyledSubpanelConfigRow >
			<div>{name}</div>
			<div>
				{preview}
				<ButtonInput>ICON</ButtonInput>
			</div>
		</StyledSubpanelConfigRow>
	);
}

export default SubpanelConfigRow;
