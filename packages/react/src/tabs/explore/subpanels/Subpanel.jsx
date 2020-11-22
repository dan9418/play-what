import PodListUtils from "@pw/core/src/PodList.utils";
import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../../other/EditContext";
import useInputContext from "../../../other/InputContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import * as Icon from '../../../../../sandbox/src/img/Icons';
import useOutputContext from "../../../other/OutputContext";

const NewSubpanelButton = (props) => {
	const { isEditing } = useEditContext();
	if (!isEditing) return null;
	return (
		<div className="new-pod">
			<ButtonInput {...props}>+ Add</ButtonInput>
		</div>
	);
}

const SubpanelHeader = ({ name, isOpen, setIsOpen, caption, preview }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<div className='subpanel-header'>
			<div className='preview-container'>
				<div className='name-container'>
					<h3 className='pod-name'>{name}</h3>
					<div className='pod-type'>{caption}</div>
				</div>
				<div className='preview pw-accent-fg'>{preview}</div>
			</div>
			<div className="button-container">
				{isOpen && isEditing && <ButtonInput
					isActive={false}
					onClick={null}
				>
					<Icon.Cancel />
				</ButtonInput>}
				{isOpen && <ButtonInput
					isActive={isEditing}
					onClick={() => setIsEditing(!isEditing)}
				>
					{isEditing ? <Icon.Confirm /> : <Icon.Edit />}
				</ButtonInput>}
				<ButtonInput
					isActive={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <Icon.Minus /> : <Icon.Plus />}
				</ButtonInput>
			</div>
		</div>
	);
};

const InnerSubpanel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const inputContext = useInputContext();
	const outputContext = useOutputContext();
	let caption = null;
	let preview = null;
	let viewerPreview = null;
	if (inputContext) {
		const { pods, podType } = inputContext;
		caption = podType;
		preview = PodListUtils.getPreview(pods, { podType })
	}
	else if (outputContext) {
		const { viewerDef, viewerProps, viewerInput } = outputContext;
		const ViewerComponent = viewerDef.component;
		caption = viewerDef.name
		if (viewerInput) preview = viewerInput.name;
		viewerPreview = <ViewerComponent {...viewerProps} />;
	}

	return (
		<div className={`subpanel ${!isOpen && 'collapsed'}`}>
			<EditContextProvider>
				<SubpanelHeader name={name} isOpen={isOpen} setIsOpen={setIsOpen} preview={preview} caption={caption} />
				{!isOpen && viewerPreview && (
					<div className="viewer-preview">
						{viewerPreview}
					</div>
				)}
				{isOpen && (
					<div className={`subpanel-body ${!isOpen && 'collapsed'}`}>
						{children}
					</div>
				)}
			</EditContextProvider>
		</div>
	);
};


const Subpanel = ({ children, isLast, onInsertAbove, onMoveUp, onDelete, onMoveDown, onInsertBelow }) => {
	const { isEditing } = useEditContext();
	return (
		<div className="subpanel-wrapper">
			<NewSubpanelButton onClick={onInsertAbove} />
			<div className="edit-wrapper">
				<InnerSubpanel name={name}>
					{children}
				</InnerSubpanel>
				{isEditing &&
					<div className="v-button">
						<ButtonInput onClick={onMoveUp}><Icon.Up /></ButtonInput>
						<ButtonInput onClick={onDelete}><Icon.Delete /></ButtonInput>
						<ButtonInput onClick={onMoveDown}><Icon.Down /></ButtonInput>
					</div>
				}
			</div>
			{isLast && <NewSubpanelButton onClick={onInsertBelow} />}
		</div>
	);
}

export default Subpanel;
