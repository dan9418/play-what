import React, { useState } from "react";
import styled from 'styled-components';
import { Cancel, Confirm, Delete, Down, Edit, Minus, Plus, Up } from "../../../img/Icons";
import useSubpanelContext, { SubpanelContextProvider } from "../../../contexts/SubpanelContext";
import useEditContext, { EditContextProvider } from "../../../contexts/EditContext";
import { ButtonInput } from '@pw/react';
import InputSubpanelContent from "./input/InputSubpanelContent";
import ViewerBox from "./output/ViewerBox";

export const NewSubpanelButton = (props) => {
	const { isEditing } = useEditContext();
	if (!isEditing) return null;
	return (
		<div className="new-subpanel-panel">
			<ButtonInput {...props}>+ Add</ButtonInput>
		</div>
	);
}

const StyledSubpanelHeader = styled.div`
	padding: 16px;
    padding-right: 0;
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
		}
	}
	& .button-container {
		& button {
			height: 32px;
			width: 32px;
			border-radius: 100%;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			margin: 0 8px;
			color: white;
		}
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
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<StyledSubpanelHeader>
			<div className='preview-container'>
				<div className='name-container'>
					<h3 className='pod-name'>{name}</h3>
					<div className='pod-type'>{caption}</div>
				</div>
				<div className='preview'>{preview}</div>
			</div>
			<div className="button-container">
				{isOpen && isEditing && <ButtonInput
					isActive={false}
					onClick={null}
				>
					<Cancel />
				</ButtonInput>}
				{isOpen && <ButtonInput
					isActive={isEditing}
					onClick={() => setIsEditing(!isEditing)}
				>
					{isEditing ? <Confirm /> : <Edit />}
				</ButtonInput>}
				<ButtonInput
					isActive={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <Minus /> : <Plus />}
				</ButtonInput>
			</div>
		</StyledSubpanelHeader>
	);
};

const StyledInnerSubpanel = styled.div`
    padding: 0 16px;
    width: 100%;
    border-radius: 16px;
    background-color: #f5f5f5;
	box-shadow: -2px 3px 15px 5px rgba(0, 0, 0, 0.1);
	
	& .body {
		padding: 0 0 24px 0;
	}
`;

const InnerSubpanel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(true);
	let caption = null;
	let preview = null;

	return (
		<StyledInnerSubpanel>
			<EditContextProvider>
				<SubpanelHeader name={name} isOpen={isOpen} setIsOpen={setIsOpen} preview={preview} caption={caption} />
				{isOpen && (
					<div className="body">
						{children}
					</div>
				)}
			</EditContextProvider>
		</StyledInnerSubpanel>
	);
};

const StyledSubpanel = styled.div`
	display: flex;
    width: 100%;
    justify-content: center;
	align-items: center;
	margin: 16px 0;
	
	& .controls {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& button {
			margin: 0 0 16px 16px;
		}
	}
	
	& button.delete {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		color: white;
	}

	& .new-subpanel-button {
		text-align: center;
		margin-bottom: 16px;
		width: 100%;
		max-width: 256px
	}
`;

const SubpanelControls = () => {
	const subpanelContext = useSubpanelContext();
	const { onMoveUp, onMoveDown, onDelete } = subpanelContext;
	const { isEditing } = useEditContext();
	if (!isEditing) return false;

	return (
		<div className="controls">
			<ButtonInput onClick={onMoveUp}><Up /></ButtonInput>
			<ButtonInput onClick={onDelete}><Delete /></ButtonInput>
			<ButtonInput onClick={onMoveDown}><Down /></ButtonInput>
		</div>
	);
}

const InsertButton = ({ below }) => {
	const subpanelContext = useSubpanelContext();
	const { onInsertAbove, onInsertBelow } = subpanelContext;
	const action = below ? onInsertBelow : onInsertAbove;
	return <NewSubpanelButton onClick={action} />;
}

const Subpanel = ({ dataList, setDataList, name, i, panelMode, isLast }) => {
	let SubpanelComponent = InputSubpanelContent;
	if (panelMode === 'output') {
		SubpanelComponent = ViewerBox;
	}
	return (
		<SubpanelContextProvider dataList={dataList} setDataList={setDataList} i={i}>
			<InsertButton />
			<StyledSubpanel>
				<InnerSubpanel name={name}>
					<SubpanelComponent />
				</InnerSubpanel>
				<SubpanelControls />
			</StyledSubpanel>
			{isLast && <InsertButton below />}
		</SubpanelContextProvider>
	);
}

export default Subpanel;
