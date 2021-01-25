import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputState, outputState } from '../../state/state';
import InputPanel from '../modules/InputPanel/InputPanel';
import OutputPanel from '../modules/OutputPanel/OutputPanel';

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
				<InputPanel data={input} setData={setInput} />
				<OutputPanel data={output} setData={setOutput} />
			</div>
		</StyledExplore>
	);
};

export default Explore;
