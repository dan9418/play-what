import SwitchInput from "@pw/react/src/ui/SwitchInput/SwitchInput";
import React, { useState } from "react";
import styled from 'styled-components';
import useEditContext from "../../../../contexts/EditContext";
import useSubpanelContext from "../../../../contexts/SubpanelContext";
import PresetBox from "./PresetBox";
import InputTable from "./table/InputTable";

const StyledDiv = styled.div`
	width: 100%;
`;

const StyledSwitchContainer = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
        margin: 8px;
    }
`;

const InputSubpanelContent = () => {
	const { isEditing } = useEditContext();
	const { data, setData } = useSubpanelContext();
	const hasKey = !!data.keyCenter;
	const podType = hasKey ? 'interval' : 'note';
	const setHasKey = () => {
		if (hasKey) setData({ ...data, keyCenter: null });
		else setData({ ...data, keyCenter: [0, 0], intervals: data.notes, notes: null });
	}

	return (
		<StyledDiv>
			{isEditing && <>
				<StyledSwitchContainer>
					Notes
					<SwitchInput value={hasKey} setValue={setHasKey} />
                Intervals
				</StyledSwitchContainer>
				<PresetBox />
			</>}
			<InputTable podType={podType} />
		</StyledDiv>
	);
};

export default InputSubpanelContent;
