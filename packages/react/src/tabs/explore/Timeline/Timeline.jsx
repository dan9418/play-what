
import { COLOR_FN } from '@pw/core/src/Color.constants';
import ColorUtils from '@pw/core/src/Color.utils';
import React from 'react';
import ButtonInput from '../../../ui/ButtonInput/ButtonInput';
import styled from 'styled-components';
import './Timeline.css';

const getPrevPosition = (position, measures) => {
	const [mIndex, bIndex] = position;
	const firstMeasure = mIndex === 0;
	const firstBeat = bIndex === 0;

	if (firstMeasure && firstBeat) {
		return [measures.length - 1, measures[mIndex].length - 1];
	}
	if (firstBeat) {
		return [mIndex - 1, measures[mIndex].length - 1];
	}
	return [mIndex, bIndex - 1];
}

const getNextPosition = (position, measures) => {
	const [mIndex, bIndex] = position;
	const lastMeasure = mIndex === measures.length - 1;
	const lastBeat = bIndex === measures[mIndex].length - 1;

	if (lastMeasure && lastBeat) {
		return [0, 0];
	}
	if (lastBeat) {
		return [mIndex + 1, 0];
	}
	return [mIndex, bIndex + 1];
}

const StyledTable = styled.table`
	background-color: white;
	border-collapse: collapse;
	table-layout: fixed;

	height: 256px;
	width: 100%;

    position: absolute;
	bottom: 0;

`;

const BeatTab = styled.th`
	background-color: ${({ theme, $active }) => $active ? theme.active : theme.primary};
    color: white;
	text-align: center;
	padding: 4px;
	cursor: pointer;
`;

const PitchRow = styled.tr`
	&:not(:last-child) {
		border-bottom: 1px solid #555;
	}
`;

const PitchCell = styled.td`
	padding: 4px;
	text-align: center;
	&:not(:last-child) {
		border-right: 1px solid #555;
	}
`;

const PITCHES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Timeline = ({ frameset, position, setPosition }) => {
	const [mIndex, bIndex] = position;

	const { measures } = frameset;
	const curMeasure = measures[mIndex];
	const { beats } = curMeasure
	const curBeat = beats[bIndex];

	const beatNum = 4;
	const beatType = 4;

	return (
		<>
			<section className="timeline">
				<section className="playback-bar">
					<span>{`${beatNum}/${beatType}`}</span>
					<ButtonInput onClick={() => setPosition(getPrevPosition(position, frameset.measures))}>Prev</ButtonInput>
					<ButtonInput onClick={() => setPosition(getNextPosition(position, frameset.measures))}>Next</ButtonInput>
				</section>
				<StyledTable>
					<thead>
						<tr>
							{measures.map((measure, i) => {
								const mActive = i === mIndex;
								return (
									<React.Fragment key={i}>
										{measure.beats.map((beat, j) => {
											const bActive = mActive && j === bIndex;
											return (
												<BeatTab
													key={j}
													$active={bActive}
													onClick={() => setPosition([i, j])}>
													{j}
												</BeatTab>
											);
										})}
									</React.Fragment>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{PITCHES.map((pitch, p) => {
							const pClasses = ['pitch'];
							const pActive = false;
							return (
								<PitchRow key={p} className={pClasses.join(' ')} >
									{measures.map((measure, i) => {
										const mClasses = ['measure'];
										const mActive = i === mIndex;
										return (
											<React.Fragment key={i}>
												{measure.beats.map((beat, j) => {
													const bClasses = ['beat'];
													const bActive = mActive && j === bIndex;
													return (
														<PitchCell key={j} className={bClasses.join(' ')}
															onClick={() => setPosition([i, j])}>{j}
														</PitchCell>
													);
												})}
											</React.Fragment>
										);
									})}
								</PitchRow>
							);
						})}
					</tbody>
				</StyledTable>
			</section>
		</>
	);
};

export default Timeline;
