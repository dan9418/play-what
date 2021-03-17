import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../assets/Icon';
import ButtonInput from '../inputs/buttons/ButtonInput';

const StyledSubpanelFooter = styled.h3`
	padding: 8px;
	border-top: 1px solid #ccc;
	display: flex;
	justify-content: flex-end;

	button {
		display: flex;
		align-items: center;

		& >:first-child {
			margin-right: 8px;
		}
	}
`;

const SubpanelFooter = ({ onSubmit }) => {
	return (
		<StyledSubpanelFooter>
			<ButtonInput onClick={onSubmit}>
				<Icon iconId='confirm' color='white' />
				Done
			</ButtonInput>
		</StyledSubpanelFooter>
	);
};

export default SubpanelFooter;
