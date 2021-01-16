/*import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import useOutputContext from "../../../../contexts/OutputContext";
import { inputListState } from "../../../../state/state";

const StyledInputModeSwitch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	margin-left: auto;
	font-size: 80%;

    & > * {
        margin: 0 4px;
    }
`;

const InputSelector = () => {
	const inputList = useRecoilValue(inputListState);
	const { inputId, setInputId } = useOutputContext();

	return (
		<StyledInputModeSwitch>
			<span>Input:</span>
			<DropdownInput options={inputList} value={inputId} setValue={x => setInputId(x.id)} />
		</StyledInputModeSwitch>
	);
};

export default InputSelector;*/
