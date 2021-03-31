import React from "react";
import styled, { css } from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledCol = styled.div`

	:not(:first-child) {
		margin-top: 16px;
	}
	
	@media(min-width: 1024px) {
		:not(:first-child) {
			margin-top: 0;
		}
		&:last-child:not(:first-child) {
			margin-left: 16px;
			padding-right: 16px;
		}
		&:first-child:not(:last-child) {
			padding-left: 16px;
			padding-right: 16px;
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
	padding: 8px 0;
`;

export const StyledColDivider = styled.div`
	${({ $hideTop }) => $hideTop ? '' : 'margin-top: 16px;'}
	${({ $hideBottom }) => $hideBottom ? '' : 'margin-bottom: 16px;'}
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
					<StyledColDivider $hideTop />
				</>
			)}

			{isOpen &&
				<>
					{editPanel}
					<StyledColDivider $hideTop />
				</>
			}

			<StyledColBody $isEnabled={!isOpen}>
				{children}
			</StyledColBody>
		</StyledCol>
	);
};

export default Col;
