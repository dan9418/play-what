import { MODEL, MODEL_ID } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { pathHeadState } from "../../../state/pathState";
import MeterWrapper from "../../pages/explorer/MeterWrapper";

const StyledPanelHeader = styled.section`
	width: 100%;

	position: sticky;
    top: 32px;
	z-index: 100;

	background-color: #ecefef;
	${({ $showBorder }) => $showBorder ? 'border-bottom: 2px solid #ccc; padding: 16px 0;' : 'padding: 16px 0 0;'}

	
	margin-bottom: 16px;

	>:nth-child(2) {
		${({ $showBorder }) => !$showBorder ? 'margin-top: 8px;' : ''}
	}

	& .button-container {
		margin: 8px 0 0;

		@media(min-width: 512px) {
			margin: 16px 0 0;
		}
	}
	
	& .text-container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 100%;

		@media(min-width: 512px) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
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
		
	}
`;

const PanelHeader = () => {
	const pathHead: any = useRecoilValue(pathHeadState);
	const { modelId } = pathHead.config;
	const { name, preview } = pathHead.data;
	const model = MODEL[modelId];

	const isGroup = modelId === MODEL_ID.Group;

	return (
		<StyledPanelHeader $showBorder={isGroup}>
			<div className='text-container'>
				<div className='name-caption--preview'>
					<div className='name-caption'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{model.name}</div>
					</div>
					<div className='preview'>{preview}</div>
				</div>
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
