import React from 'react';
import Icon from '../Icon';
import useEditContext from '../../../contexts/EditContext';
import ButtonInput from './ButtonInput';

const EditButton = props => {
	const { isEditing, setIsEditing } = useEditContext();
	return (
		<ButtonInput {...props} onClick={props.onClick || (() => setIsEditing(!isEditing))}>
			<Icon color="white" iconId={isEditing ? 'confirm' : 'edit'} size={12} />
		</ButtonInput >
	);
}

export default EditButton;
