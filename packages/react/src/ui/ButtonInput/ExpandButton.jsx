import React from 'react';
import Icon from '../../../../sandbox/src/components/ui/Icon';
import useEditContext from '../../../../sandbox/src/contexts/EditContext';
import ButtonInput from './ButtonInput';

const ExpandButton = ({ isOpen, setIsOpen, ...props }) => {
	return (
		<ButtonInput {...props} onClick={() => setIsOpen(!isOpen)}>
			<Icon iconId={isOpen ? 'minus' : 'plus'} size={12} />
		</ButtonInput>
	);
}

export default ExpandButton;
