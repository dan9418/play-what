import React from "react";
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
			margin-left: 8px;
		}
	}
`;

const SubpanelFooter = ({ onSubmit }) => {
	return (
		<StyledSubpanelFooter>
			<ButtonInput onClick={onSubmit}>
				Apply
				<Icon iconId='confirm' color='white' />
			</ButtonInput>
		</StyledSubpanelFooter>
	);
};

export default SubpanelFooter;
