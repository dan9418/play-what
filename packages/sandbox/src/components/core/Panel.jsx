import { ButtonInput } from '@pw/react';
import React, { useState } from "react";
import styled from 'styled-components';
import { EditContextProvider } from "../../contexts/EditContext";
import Icon from "../ui/Icon";
import EditBox from './EditBox';

const StyledPanelHeader = styled.div`
	width: 100%;
	padding: 16px 0;
    display: flex;
    align-items: center;
	justify-content: space-between;
	
	& .preview-container {
		& .name-container {
			display: flex;
    		align-items: center;
			& .pod-name {
				font-size: 200%;
			}
			& .pod-type {
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

const PanelHeader = ({ name, isOpen, setIsOpen, caption, preview }) => {
	return (
		<StyledPanelHeader>
			<div className='preview-container'>
				<div className='name-container'>
					<h3 className='pod-name'>{name}</h3>
					<div className='pod-type'>{caption}</div>
				</div>
				<div className='preview'>{preview}</div>
			</div>
			<ButtonInput
				isActive={isOpen}
				onClick={() => setIsOpen(!isOpen)}
			>
				<Icon iconId={isOpen ? 'minus' : 'plus'} />
			</ButtonInput>
		</StyledPanelHeader>
	);
};

const StyledPanel = styled.div`
    padding: 0 16px;
    width: 100%;
	margin: 0 auto;
	max-width: 1024px;
    border-radius: 8px;
    background-color: #f5f5f5;
	box-shadow: -2px 3px 15px 5px rgba(0, 0, 0, 0.1);
	
	& .body {
		padding: 0 0 24px 0;
	}
`;

const Panel = ({ name, caption, preview, leftActions, rightAction,  children }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<StyledPanel>
			<EditContextProvider>
				<PanelHeader name={name} isOpen={isOpen} setIsOpen={setIsOpen} preview={preview} caption={caption} />
				{isOpen && (
					<div className="body">
						{children}
					</div>
				)}
			</EditContextProvider>
		</StyledPanel>
	);
};

export default Panel;
