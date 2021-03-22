import { MODEL } from "@pw/core/src/models/Model.constants";
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
	@media(min-width: 1024px) {
		position: static;
	}
    top: 48px;
	z-index: 1;
	background-color: #ecefef;
    
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	& .preview-container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 100%;

		@media(min-width: 512px) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		& .name-container {
			display: flex;
			flex-direction: column;

			& > .name {
				font-size: 200%;
			}
			& > .caption {
				padding-top: 4px;
				padding-left: 8px;
    			color: #555;
			}
		}
		& .preview {
			font-size: 140%;
			padding: 4px;
			color: ${({ theme }) => theme.accent}
		}
	}
`;

const PanelHeader = () => {
	const pathHead: any = useRecoilValue(pathHeadState);
	const { modelId, modelValue, modelOptions } = pathHead.config;
	const { name, preview } = pathHead.data;
	const model = MODEL[modelId];


	const { pop, prev, next } = usePathNavContext();

	return (
		<StyledPanelHeader>
			<div className='preview-container'>
				<div className='name-container'>
					<h3 className='name'>{name}</h3>
					<div className='caption'>{model.name}</div>
				</div>
				<div className='preview'>{preview}</div>
			</div>
			<div className='button-container'>
				{model.utils.playSound && <IconButton onClick={() => model.utils.playSound(modelValue, modelOptions)} iconId="speaker" />}
				{prev && <IconButton onClick={prev} color={THEME.primary} iconId='prev' />}
				{next && <IconButton onClick={next} color={THEME.primary} iconId='next' />}
				{true && <IconButton onClick={pop} color={THEME.primary} iconId='up' />}

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
