import React from "react";
import styled from 'styled-components';
import { usePathContext } from '../../../contexts/PathContext';
import THEME from "../../../styles/theme";
import IconButton from "../inputs/buttons/IconButton";

const StyledPanelHeader = styled.div`
	width: 100%;
	position: sticky;
	@media(min-width: 1024px) {
		position: static;
	}
    top: 48px;
	z-index: 1;
	background-color: #ecefef;
	padding-top: 8px;
    
	> section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 8px;
		border-bottom: 2px solid #ccc;
	}
	
	& .preview-container {
		& .name-container {
			display: flex;
    		align-items: baseline;
			& > .name {
				font-size: 200%;
			}
			& > .caption {
				padding-left: 8px;
    			color: #555;
				@media(max-width: 512px) {
					display: none;
				}
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
	const pathContext = usePathContext();
	const { pop, path, pathHead } = pathContext;
	const { modelId, name, preview } = pathHead;
	return (
		<StyledPanelHeader>
			<section>
				<div className='preview-container'>
					<div className='name-container'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{modelId}</div>
					</div>
					<div className='preview'>{preview}</div>
				</div>
				{path.length > 1 &&
					<IconButton onClick={pop} color={THEME.primary} iconId='up' />
				}
			</section>
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
			<PanelHeader name={name} preview={preview} caption={caption} />
			<div className="panel-body">
				{children}
			</div>
		</StyledPanel>
	);
};

export default Panel;
