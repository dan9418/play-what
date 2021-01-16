import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputState, outputState } from '../../../state/state';
import Panel from './Panel';
import SubpanelDelegator from './SubpanelDelegator';
import SubpanelList from './SubpanelList';

const StyledExplore = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;

const Explore = () => {
	const [input, setInput] = useRecoilState(inputState)
	const [output, setOutput] = useRecoilState(outputState)
	return (
		<StyledExplore>
			<SubpanelDelegator data={input} setData={setInput} listType="input" />
			<SubpanelDelegator data={output} setData={setOutput} listType="output" />
		</StyledExplore>
	);
};

export default Explore;
