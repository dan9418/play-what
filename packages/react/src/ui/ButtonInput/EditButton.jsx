import React from 'react';
import Icon from '../../../../sandbox/src/components/ui/Icon';
import useEditContext from '../../../../sandbox/src/contexts/EditContext';
import ButtonInput from './ButtonInput';

const EditButton = props => {
	const { isEditing, setIsEditing } = useEditContext();
	return (
		<ButtonInput {...props} onClick={() => setIsEditing(!isEditing)}>
			<Icon iconId={isEditing ? 'confirm' : 'edit'} size={12} />
		</ButtonInput>
	);
}

export default EditButton;
