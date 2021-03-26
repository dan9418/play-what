import React from "react";
import styled, { css } from 'styled-components';
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

const StyledColBody = styled.div`
	${({ $isEnabled }) => $isEnabled ? '' : css`
		//opacity: .5;
		//pointer-events: none;
		//cursor: text;
	`}
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

const Col = ({ title, editPanel, children, hideHeader, isOpen, setIsOpen }) => {

	return (
		<StyledCol>
			{!hideHeader && (
				<>
					<StyledColHeader>
						{title}
						<IconButton iconId={isOpen ? 'confirm' : 'edit'} onClick={() => setIsOpen(!isOpen)} />
					</StyledColHeader>
					<StyledColDivider />
				</>
			)}

			{isOpen &&
				<>
					{editPanel}
					<StyledColDivider />
				</>
			}

			<StyledColBody $isEnabled={!isOpen}>
				{children}
			</StyledColBody>
		</StyledCol>
	);
};

export default Col;
