import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import { useRecoilState } from 'recoil';
import { inputListState, outputListState } from '../../../../sandbox/src/state/state';
import OutputSubpanel from './output/OutputSubpanel';
import InputSubpanel from './input/InputSubpanel';

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
			<Panel
				name="Inputs"
				dataList={inputList}
				setDataList={setInputList}
				subpanelComponent={InputSubpanel}
			/>
			<Panel
				name="Outputs"
				dataList={outputList}
				setDataList={setOutputList}
				subpanelComponent={OutputSubpanel}
			/>
		</StyledExplore>
	);
};

export default Explore;
