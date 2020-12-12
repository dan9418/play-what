import PodListUtils from "@pw/core/src/PodList.utils";
import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../../other/EditContext";
import useInputContext from "../../../other/InputContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import * as Icon from '../../../../../sandbox/src/img/Icons';
import useOutputContext from "../../../other/OutputContext";

export const NewSubpanelButton = (props) => {
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
				<div className='preview'>{preview}</div>
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


const Subpanel = ({ children, data, setData, name, i }) => {
	const { isEditing } = useEditContext();
	const onInsertAbove = () => setData([...data.slice(0, i), data[i], ...data.slice(i)]);
	const onMoveUp = () => setData([...data.slice(0, i - 1), data[i], data[i - 1], ...data.slice(i + 1)]);
	const onDelete = () => setData([...data.slice(0, i), ...data.slice(i + 1)]);
	const onMoveDown = () => setData([...data.slice(0, i), data[i + 1], data[i], ...data.slice(i + 2)]);
	return (
		<>
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
		</>
	);
}

export default Subpanel;
