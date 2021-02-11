import React from "react";
import styled from 'styled-components';
import { EditContextProvider } from "../../contexts/EditContext";
import { usePathContext } from '../../contexts/PathContext';
import ButtonInput from "./inputs/buttons/ButtonInput";
import Icon from "./Icon";

const StyledPanelHeader = styled.div`
	width: 100%;
	padding: 16px 0;
    display: flex;
    align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid #ccc;
	
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
			}
		}
		& .preview {
			font-size: 140%;
			padding: 4px;
			color: ${({ theme }) => theme.accent}
		}
	}
	& button {
		height: 64px;
		width: 64px;
		border-radius: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		background-color: transparent;
	}
	& button:hover {
		background-color: rgba(0,0,0,0.1);
	}
	& svg {
		height: 24px;
    	width: 24px;
	}
	& svg, & svg * {
		color: #AAA;
    	fill: #AAA;
	}
`;

const PanelHeader = ({ name, caption, preview }) => {
	const pathContext = usePathContext();
	const { pop, path } = pathContext;
	return (
		<StyledPanelHeader>
			<div className='preview-container'>
				<div className='name-container'>
					<h3 className='name'>{name}</h3>
					<div className='caption'>{caption}</div>
				</div>
				<div className='preview'>{preview}</div>
			</div>
			{path.length > 1 &&
				<ButtonInput onClick={pop}>
					<Icon iconId='delete' />
				</ButtonInput>
			}
		</StyledPanelHeader>
	);
};

const StyledPanel = styled.div`
    padding: 0 16px;
    width: 100%;
	margin: 0 auto;
	max-width: 1024px;
    border-radius: 8px;
    //background-color: #f5f5f5;
	//box-shadow: -2px 3px 15px 5px rgba(0, 0, 0, 0.1);
	
	& > .panel-body {
		padding: 0 0 24px 0;
	}
`;

const Panel = ({ name, caption, preview, leftActions, rightAction,  children }) => {
	return (
		<StyledPanel>
			<EditContextProvider>
				<PanelHeader name={name} preview={preview} caption={caption} />
				<div className="panel-body">
					{children}
				</div>
			</EditContextProvider>
		</StyledPanel>
	);
};

export default Panel;
