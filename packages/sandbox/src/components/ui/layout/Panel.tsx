import ModelUtils from "@pw/core/src/models/Model.utils";
import { useIsMobile } from "@pw/sandbox/src/hooks/useWindowSize";
import React from "react";
import styled, { css } from 'styled-components';
import IconButton from "../inputs/buttons/IconButton";
import SwitchInput from "../inputs/SwitchInput";

const StyledPanelHeader = styled.section`
	width: 100%;
	padding: 16px;

	@media(min-width: 1024px) {
		padding: 16px 0;
	}

	${({ $showBorder }) => $showBorder ?
		css`border-bottom: 1px solid ${({ theme }) => theme.border};` :
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
				font-size: 80%;
				font-weight: 500;
				margin-right: 4px;
			}

			display: flex;
			align-items: center;
		}
	}
`;

const StyledToolbox = styled.div`
	background-color: #e5e8e8;
	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 8px;
	padding: 8px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 8px;
	@media(min-width: 512px) {
		margin-top: 0;
		display: unset;
		height: 100%;
	}

	> div {
		> span {
			font-size: 80%;
			font-weight: 500;
			margin-right: 4px;
			color: #555;
		}

		display: flex;
		align-items: center;
		justify-content: flex-end;
		
		:not(:last-child) {
			margin-right: 8px;
			@media(min-width: 512px) {
				margin-right: 0;
				margin-bottom: 8px;
			}
		}
		
		.btn-speaker {
			height: 24px;
			width: 48px;
			border-radius: 4px;
		}
	}
`;


const PanelHeader: React.FC<any> = ({ name, caption, preview }) => {
	const isMobile = useIsMobile();

	return (
		<StyledPanelHeader $showBorder={false}>
			<div className='top-container'>
				<div className='name-caption--preview'>
					<div className='name-caption'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{caption}</div>
					</div>
					<div className='preview'>{preview}</div>
				</div>
				{(isMobile) ? null :
					<StyledToolbox>
						<div>
							<span>Match Octave?</span>
							<SwitchInput value={false} setValue={null} />
						</div>
						<div>
							<span>Play Sound</span>
							<IconButton iconId="speaker" onClick={() => ModelUtils.playSound(null)} />
						</div>
					</StyledToolbox>
				}
			</div>
			{(!isMobile) ? null :
				<StyledToolbox>
					<div>
						<span>Match Octave?</span>
						<SwitchInput value={false} setValue={null} />
					</div>
					<div>
						<span>Play Sound</span>
						<IconButton iconId="speaker" onClick={() => ModelUtils.playSound(null)} />
					</div>
				</StyledToolbox>
			}
		</StyledPanelHeader>
	);
};

const StyledPanel = styled.div`
    width: 100%;
	margin: 0 auto;
	max-width: 1024px;
    border-radius: 8px;
`;



const Panel: React.FC<any> = ({ name, caption, preview, children }) => {
	return (
		<StyledPanel>
			{/* @ts-ignore */}
			<PanelHeader name={name} preview={preview} caption={caption} />
			{children}
		</StyledPanel>
	);
};

export default Panel;
