import React from 'react';
import styled from 'styled-components';
import './Explore.css';
import Panel from './Panel';
import { useRecoilState } from 'recoil';
import { inputListState, outputListState } from '../../../../sandbox/src/state/state';

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
	const [outputList, setOutputList] = useRecoilState(outputListState)
	return (
		<StyledExplore>
			<Panel
				name="Outputs"
				dataList={outputList}
				setDataList={setOutputList}
				subpanelComponent={null}
			/>
		</StyledExplore>
	);
};

export default Explore;
