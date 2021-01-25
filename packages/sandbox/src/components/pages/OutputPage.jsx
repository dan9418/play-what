import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { outputState } from '../../state/state';
import OutputPanel from '../modules/OutputPanel/OutputPanel';

const StyledOutputPage = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
`;

const OutputPage = () => {
	const [output, setOutput] = useRecoilState(outputState);

	return (
		<StyledOutputPage>
			<OutputPanel data={output} setData={setOutput} />
		</StyledOutputPage>
	);
};

export default OutputPage;
