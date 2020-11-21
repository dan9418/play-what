import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../../other/EditContext";
import ButtonInput from '../../../ui/ButtonInput/ButtonInput';

export const PanelHeader = ({ isOpen, setIsOpen, name }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<div className='panel-header'>
			<h2>
				{name}
			</h2>
			<ButtonInput
				isActive={isEditing}
				onClick={() => setIsEditing(!isEditing)}
			>
				{isEditing ? 'done' : 'edit'}
			</ButtonInput>
		</div>
	);
};


export const Panel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className='panel'>
			<EditContextProvider>
				<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} />
				{isOpen && (
					<div className='panel-body'>
						{children}
					</div>
				)}
			</EditContextProvider>
		</div>
	);
}

export default Panel;
