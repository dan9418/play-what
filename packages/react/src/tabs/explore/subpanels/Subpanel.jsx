import PodListUtils from "@pw/core/src/PodList.utils";
import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../../other/EditContext";
import usePodContext from "../../../other/PodContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";

const SubpanelHeader = ({ name }) => {
	const podContext = usePodContext();
	const { pods, podType } = podContext;
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
			<ButtonInput
				isActive={isEditing}
				onClick={() => setIsEditing(!isEditing)}
			>
				{isEditing ? 'done' : 'edit'}
			</ButtonInput>
		</div>
	);
};

const Subpanel = ({ name, children }) => {
	return (
		<div className='subpanel'>
			<EditContextProvider>
				<SubpanelHeader name={name} />
				<div className='subpanel-body'>
					{children}
				</div>
			</EditContextProvider>
		</div>
	);
};

export default Subpanel;
