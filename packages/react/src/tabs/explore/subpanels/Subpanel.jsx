import PodListUtils from "@pw/core/src/PodList.utils";
import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../../other/EditContext";
import useInputContext from "../../../other/InputContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import * as Icon from '../../../../../sandbox/src/img/Icons';

const SubpanelHeader = ({ name, isOpen, setIsOpen }) => {
	const inputContext = useInputContext();
	const { pods, podType } = inputContext || { pods: [], podType: 'note' };
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<div className='subpanel-header'>
			<div className='preview-container'>
				<div className='name-container'>
					<h3 className='pod-name'>{name}</h3>
					<div className='pod-type'>{podType}</div>
				</div>
				<div className='preview pw-accent-fg'>{PodListUtils.getPreview(pods, { podType })}</div>
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

const Subpanel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className='subpanel'>
			<EditContextProvider>
				<SubpanelHeader name={name} isOpen={isOpen} setIsOpen={setIsOpen} />
				{isOpen && (
					<div className='subpanel-body'>
						{children}
					</div>
				)}
			</EditContextProvider>
		</div>
	);
};

export default Subpanel;
