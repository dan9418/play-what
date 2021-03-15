import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledCol = styled.div`
	margin-top: 16px;
	
	@media(min-width: 1024px) {
		&:last-child:not(:first-child) {
			margin-left: 24px;
		}
		&:first-child:not(:last-child) {
			padding-right: 24px;
			border-right: 1px solid #ccc;
		}
	}
`;

const StyledColHeader = styled.h2`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledColDivider = styled.div`
	padding-bottom: 16px;
	margin-bottom: 16px;
	border-bottom: 1px solid #ccc;
`;

const Col = ({ title, editPanel, children }) => {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<StyledCol>
			<StyledColHeader>
				{title}
				<IconButton iconId={isEditing ? 'confirm' : 'edit'} onClick={() => setIsEditing(!isEditing)} />
			</StyledColHeader>

			<StyledColDivider />

			{isEditing &&
				<>
					{editPanel}
					<StyledColDivider />
				</>
			}

			{children}
		</StyledCol>
	);
};

export default Col;
