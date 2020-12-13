import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputListState, outputListState } from '../../../../sandbox/src/state/state';
import InputTable from './input/table/InputTable';
import ViewerBox from './output/ViewerBox';
import Panel from './Panel';

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
				subpanelComponent={InputTable}
			/>
			<Panel
				name="Outputs"
				dataList={outputList}
				setDataList={setOutputList}
				subpanelComponent={ViewerBox}
			/>
		</StyledExplore>
	);
};

export default Explore;
