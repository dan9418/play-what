import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputState, outputState } from '../../../state/state';
import Chart from './chart/Chart';
import Panel from './Panel';
import SubpanelDelegator from './SubpanelDelegator';
import SubpanelList from './SubpanelList';

const StyledExplore = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
	
	& > .io {
		margin: auto;
		width: 100%;
		max-width: 1024px;
		display: flex;
		flex-direction: column;

		@media(min-width: 1024px) {
			flex-direction: row;
			align-items: flex-start;
		}

		& > * {
			margin: 8px 0;
		}
	}
`;

const Explore = () => {
	const [input, setInput] = useRecoilState(inputState)
	const [output, setOutput] = useRecoilState(outputState)
	return (

		<StyledExplore>
			<Chart />
			<div className="io">
				<SubpanelDelegator data={input} setData={setInput} listType="input" />
				<SubpanelDelegator data={output} setData={setOutput} listType="output" />
			</div>
		</StyledExplore>
	);
};

export default Explore;
