import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../other/EditContext";
import ButtonInput from "../../ui/ButtonInput/ButtonInput";

const SubpanelHeader = ({ name }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<div className='subpanel-header'>
			<div className="subpanel-name">{name}</div>
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
