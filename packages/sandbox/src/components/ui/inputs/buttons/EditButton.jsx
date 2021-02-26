import React from 'react';
import Icon from '../../assets/Icon';
import ButtonInput from './ButtonInput';

const EditButton = props => {
	const { isEditing, setIsEditing } = {};
	return (
		<ButtonInput {...props} onClick={() => setIsEditing(!isEditing)}>
			<Icon color="white" iconId={isEditing ? 'confirm' : 'edit'} size={16} />
		</ButtonInput >
	);
}

export default EditButton;
