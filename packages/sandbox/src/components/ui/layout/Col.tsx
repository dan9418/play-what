import React from "react";
import styled, { css } from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledCol = styled.div`
	max-width: 512px;
	width: 100%;
	display: flex;
	flex-direction: column;	

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

const Col = ({ title, editPanel, children, hideHeader = false, isOpen, setIsOpen }) => {

	return (
		<StyledCol>
			{!hideHeader && (
				<>
					<StyledColHeader>
						{title}
						<div>
							{isOpen &&
								<IconButton iconId={'more'} onClick={() => setIsOpen(!isOpen)} />
							}
							<IconButton iconId={isOpen ? 'confirm' : 'edit'} onClick={() => setIsOpen(!isOpen)} />
						</div>
					</StyledColHeader>
					<StyledColDivider $hideTop />
				</>
			)}
			<StyledColBody $isEnabled={!isOpen}>
				{children}
			</StyledColBody>
		</StyledCol>
	);
};

export default Col;
