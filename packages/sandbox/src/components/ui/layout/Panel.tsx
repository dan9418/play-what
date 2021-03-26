import { MODEL, MODEL_ID } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { usePathNavContext } from "../../../contexts/PathNavContext";
import { pathHeadState } from "../../../state/pathState";
import THEME from "../../../styles/theme";
import IconButton from "../inputs/buttons/IconButton";

const StyledPanelHeader = styled.section`
	width: 100%;

	position: sticky;
    top: 32px;
	z-index: 100;

	background-color: #ecefef;
	${({ $showBorder }) => $showBorder ? 'border-bottom: 2px solid #ccc;' : ''}
    
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 16px 0;

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
	const { modelId, modelValue, modelOptions } = pathHead.config;
	const { name, preview } = pathHead.data;
	const model = MODEL[modelId];

	const { pop, prev, next, path } = usePathNavContext();

	return (
		<StyledPanelHeader $showBorder={modelId === MODEL_ID.Group}>
			<div className='text-container'>
				<div className='name-caption--preview'>
					<div className='name-caption'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{model.name}</div>
					</div>
					<div className='preview'>{preview}</div>
				</div>
				<div className='button-container'>
					{model.utils.playSound && <IconButton onClick={() => model.utils.playSound(modelValue, modelOptions)} iconId="speaker" />}
					{prev && <IconButton onClick={prev} color={THEME.primary} iconId='prev' />}
					{next && <IconButton onClick={next} color={THEME.primary} iconId='next' />}
					{path.length > 0 && <IconButton onClick={pop} color={THEME.primary} iconId='up' />}
				</div>
			</div>
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
