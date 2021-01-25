import { ButtonInput } from '@pw/react';
import React, { useState } from "react";
import styled from 'styled-components';
import { EditContextProvider } from "../../../contexts/EditContext";
import Icon from "../../ui/Icon";

const StyledSubpanelHeader = styled.div`
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

			}
			& .pod-type {
				padding-left: 8px;
    			color: #555;
			}
		}
		& .preview {
			padding: 4px;
			color: ${({ theme }) => theme.accent}
		}
	}
	& button {
		height: 32px;
		width: 32px;
		border-radius: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		color: white;
	}
	& svg {
		height: 12px;
    	width: 12px;
	}
	& svg, & svg * {
		color: white;
    	fill: white;
	}
`;

const SubpanelHeader = ({ name, isOpen, setIsOpen, caption, preview }) => {
	return (
		<StyledSubpanelHeader>
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
		</StyledSubpanelHeader>
	);
};

const StyledSubpanel = styled.div`
    padding: 0 16px;
    width: 100%;
    border-radius: 16px;
    background-color: #f5f5f5;
	box-shadow: -2px 3px 15px 5px rgba(0, 0, 0, 0.1);
	
	& .body {
		padding: 0 0 24px 0;
	}
`;

const Subpanel = ({ name, caption, preview, children }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<StyledSubpanel>
			<EditContextProvider>
				<SubpanelHeader name={name} isOpen={isOpen} setIsOpen={setIsOpen} preview={preview} caption={caption} />
				{isOpen && (
					<div className="body">
						{children}
					</div>
				)}
			</EditContextProvider>
		</StyledSubpanel>
	);
};

export default Subpanel;
