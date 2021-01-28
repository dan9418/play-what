import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputState } from '../../state/state';
import InputPanel from '../modules/InputPanel/InputPanel';

const StyledInputPage = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
`;

const InputPage = () => {
	const [input, setInput] = useRecoilState(inputState);

	return (
		<StyledInputPage>
			<InputPanel data={input} setData={setInput} />
		</StyledInputPage>
	);
};

export default InputPage;
