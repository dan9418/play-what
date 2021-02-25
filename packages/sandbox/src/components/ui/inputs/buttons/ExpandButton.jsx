import React from 'react';
import { css } from 'styled-components';
import THEME from '../../../../styles/theme';
import Icon from '../../assets/Icon';
import ButtonInput from './ButtonInput';

const styles = css`
	background-color: ${THEME.active};
`;

const ExpandButton = ({ isOpen, setIsOpen, ...props }) => {
	return (
		<ButtonInput {...props} onClick={() => setIsOpen(!isOpen)} css={styles}>
			<Icon color="white" iconId={isOpen ? 'minus' : 'plus'} size={16} />
		</ButtonInput>
	);
}

export default ExpandButton;
