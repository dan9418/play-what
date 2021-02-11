import React from 'react';
import Icon from '../../Icon';
import ButtonInput from './ButtonInput';

const ExpandButton = ({ isOpen, setIsOpen, ...props }) => {
	return (
		<ButtonInput {...props} onClick={() => setIsOpen(!isOpen)}>
			<Icon color="white" iconId={isOpen ? 'minus' : 'plus'} size={12} />
		</ButtonInput>
	);
}

export default ExpandButton;
