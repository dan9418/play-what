
import { COLOR_FN } from '@pw/core/src/Color.constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonInput from '../../../ui/ButtonInput/ButtonInput';
import './Timeline.css';

const StyledTable = styled.table`
	background-color: white;
	border-collapse: collapse;
	table-layout: fixed;

	height: 100%;
	width: 100%;
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

const PlaybackBar = styled.section`
	position: absolute;
    bottom: -100%;
    width: 100%;
    background-color: #ddd;
    color: #25283D;
	height: 64px;
	padding: 8px;
	box-sizing: border-box;
    display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
`;

const Right = styled.div`
`;

const PitchCell = styled.td`
	padding: 4px;
	text-align: center;
	background-color: ${({ $active, $pod }) => $pod ? COLOR_FN.degree.value($pod) : $active ? '#ddd' : 'white'};
	&:not(:last-child) {
		border-right: 1px solid #555;
	}
`;

const PITCHES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const StyledTimeline = styled.section`
	width: 100%;
    background-color: #fff;
    border-top: 1px solid #555;
    position: fixed;
    bottom: 0;
    z-index: 1000;
`;

const StyledTableContainer = styled.div`
	position: absolute;
	bottom: 64px;
	width: 100%;

	height: ${({ $open }) => $open ? 256 : 0}px;
	${({ $open }) => $open ? '' : `
		& table {
			display: none;
		}
	`};
`;

const StyledToggle = styled.button`
	width: 128px;
	height: 32px;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: ${({ theme }) => theme.accent};
	border-radius: 8px 8px 0 0;
	position: absolute;
	right: 0;
	bottom: 100%;
	color: white;
	font-weight: bold;
	font-size: 140%;
`;

const Timeline = ({ frames, index, setIndex }) => {

	const [open, setOpen] = useState(true);

	return (
		<>
			<StyledTimeline>
				<PlaybackBar>
					<Left>
						{index}
					</Left>
					<Right>
						<ButtonInput onClick={() => setIndex(index - 1)}>Prev</ButtonInput>
						<ButtonInput onClick={() => setIndex(index + 1)}>Next</ButtonInput>
					</Right>
				</PlaybackBar>
				<StyledTableContainer $open={open}>
					<StyledToggle onClick={() => setOpen(!open)} >
						{open ? '-' : '+'}
					</StyledToggle>
					<StyledTable>
						<thead>
							<tr>
								{frames.map((frame, b) => {
									const isActive = b === index;
									return (
										<BeatTab
											key={b}
											$active={isActive}
											onClick={() => setIndex(b)}
										>
											{b}
										</BeatTab>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{PITCHES.map((pitch, p) => {
								return (
									<PitchRow key={p}>
										{frames.map((frame, b) => {
											const isActive = b === index;
											const pod = frame ?
												frame.pods.find(x => x[0] === p)
												: null;
											return (
												<PitchCell
													key={b}
													$active={isActive}
													$pod={pod}
												/>
											);
										})}
									</PitchRow>
								);
							})}
						</tbody>
					</StyledTable>
				</StyledTableContainer>
			</StyledTimeline>
		</>
	);
};

export default Timeline;
