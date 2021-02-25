import React from "react";
import styled from 'styled-components';
import { EditContextProvider } from "../../../contexts/EditContext";
import { usePathContext } from '../../../contexts/PathContext';
import Viewer from "../../core/Viewer";
import IconButton from "../inputs/buttons/IconButton";

const StyledPanelHeader = styled.div`
	width: 100%;
	padding: 16px 0;
    
	> section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 16px;
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

const PanelHeader = ({ name, caption, preview }) => {
	const pathContext = usePathContext();
	const { pop, path, pathHead } = pathContext;
	return (
		<StyledPanelHeader>
			<section>
				<div className='preview-container'>
					<div className='name-container'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{caption}</div>
					</div>
					<div className='preview'>{preview}</div>
				</div>
				{path.length > 1 &&
					<IconButton onClick={pop} iconId='up' />
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

	.panel-body {
		display: grid;
		grid-gap: 32px;
		width: 100%;
		max-width: 512px;
		margin: auto;

		@media(min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
			max-width: 100%;
		}

		grid-template-columns: 1fr;

		padding: 0 0 24px 0;
	}
`;

const Panel = ({ name, caption, preview, leftActions, rightAction, children }) => {
	return (
		<StyledPanel>
			<EditContextProvider>
				<PanelHeader name={name} preview={preview} caption={caption} />
				<div className="panel-body">
					<div>
						<Viewer />
					</div>
					<div>
						{children}
					</div>
				</div>
			</EditContextProvider>
		</StyledPanel>
	);
};

export default Panel;
