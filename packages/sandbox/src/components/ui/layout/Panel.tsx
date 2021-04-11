import { MODEL_MAP, ModelId } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import { matchOctaveState, pathHeadState } from "../../../state/pathState";
import MeterWrapper from "../../pages/explorer/MeterWrapper";
import SwitchInput from "../inputs/SwitchInput";

const StyledPanelHeader = styled.section`
	width: 100%;
	padding: 16px;

	${({ $showBorder }) => $showBorder ?
		'border-bottom: 1px solid #ccc;' :
		''
	}

	& .button-container {
		margin: 8px 0 0;

		@media(min-width: 512px) {
			margin: 16px 0 0;
		}
	}
	
	& .top-container {
		display: flex;
		justify-content: space-between;
		//flex-direction: column;
		width: 100%;

		@media(min-width: 512px) {
			flex-direction: row;
		}

		& .name-caption--preview {
			display: flex;
			flex-direction: column;
			& > .name-caption {
				display: flex;
				align-items: baseline;
				white-space: nowrap;
				& > .name {
					font-size: 200%;
				}
				& > .caption {
					font-size: unset;
					color: #555;
					margin-top: 8px;
					margin-left: 8px;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					@media(min-width: 512px) {
						margin-top: 0;
						justify-content: flex-end;
					}
				}
			}
			& .preview {
				padding-top: 4px;
				display: flex;
				align-items: center;
				font-size: 140%;
				color: ${({ theme }) => theme.accent}
			}
		}

		.switch-container {
			span {
				font-weight: bold;
				margin-bottom: 4px;
			}

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			@media(max-width: 512px) {
				align-items: flex-end;
			}
		}
	}
`;

const PanelHeader = () => {
	const pathHead: any = useRecoilValue(pathHeadState);
	const [matchOctave, setMatchOctave] = useRecoilState(matchOctaveState);

	const { modelId } = pathHead.config;
	const { name, preview } = pathHead.data;
	const model = MODEL_MAP.get(modelId);

	const isGroup = modelId === ModelId.Group;

	return (
		<StyledPanelHeader $showBorder={isGroup}>
			<div className='top-container'>
				<div className='name-caption--preview'>
					<div className='name-caption'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{model.name}</div>
					</div>
					{isGroup ? null : <div className='preview'>{preview}</div>}
				</div>
				{isGroup ? null :
					<div className='switch-container'>
						<span>Match Octave?</span>
						<SwitchInput value={matchOctave} setValue={setMatchOctave} />
					</div>
				}
			</div>
			{!isGroup && <MeterWrapper />}
		</StyledPanelHeader>
	);
};

const StyledPanel = styled.div`
    width: 100%;
	margin: 0 auto;
	max-width: 1024px;
    border-radius: 8px;
`;



const Panel = ({ name, caption, preview, leftActions, rightAction, children }) => {
	return (
		<StyledPanel>
			{/* @ts-ignore */}
			<PanelHeader name={name} preview={preview} caption={caption} />
			{children}
		</StyledPanel>
	);
};

export default Panel;
