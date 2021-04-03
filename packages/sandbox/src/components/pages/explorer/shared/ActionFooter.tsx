import React from "react";
import styled from 'styled-components';
import Icon from '../../../ui/Icon';
import ButtonInput from '../../../ui/inputs/buttons/ButtonInput';

const StyledActionFooter = styled.h3`
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;

	button {
		display: flex;
		align-items: center;

		& >:first-child {
			margin-left: 8px;
		}

		:not(:last-child) {
			margin-right: 16px;
		}
	}
`;

const ActionFooter = ({ onSubmit, onCancel }) => {
	return (
		<StyledActionFooter>
			{onCancel &&
				<>
					<ButtonInput onClick={onCancel}>
						Cancel
						<Icon iconId='cancel' color='white' />
					</ButtonInput>
				</>
			}
			<ButtonInput onClick={onSubmit}>
				Apply
				<Icon iconId='confirm' color='white' />
			</ButtonInput>
		</StyledActionFooter>
	);
};

export default ActionFooter;
