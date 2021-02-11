import React from 'react';
import Icon from '../Icon';
import ButtonInput from './ButtonInput';

const CloseButton = props => {
	return (
		<ButtonInput {...props} className="close">
			<Icon iconId='delete' size={12} />
		</ButtonInput>
	);
}

export default CloseButton;
