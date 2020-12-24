import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputListState, outputListState } from '../../../state/state';
import Panel from './Panel';
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
	const [inputList, setInputList] = useRecoilState(inputListState)
	const [outputList, setOutputList] = useRecoilState(outputListState)
	return (
		<StyledExplore>
			<Panel name="Inputs">
				<SubpanelList
					list={inputList}
					setList={setInputList}
					listType='input'
				/>
			</Panel>
			<Panel name="Outputs">
				<SubpanelList
					list={outputList}
					setList={setOutputList}
					listType='output'
				/>
			</Panel>
		</StyledExplore>
	);
};

export default Explore;
