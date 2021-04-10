import React from "react";
import styled, { css } from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';
import OverflowMenu from "./OverflowMenu";

const StyledCol = styled.div`
	max-width: 512px;
	width: 100%;
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
	display: flex;
	flex-direction: column;	

	:not(:first-child) {
		margin-top: 8px;
	}
	
	@media(min-width: 1024px) {
		:not(:first-child) {
			margin-top: 0;
		}
		${({ $hasBorder }) => !$hasBorder ? 'padding-left: 16px;' : css`
			padding-right: 16px;
			border-right: 1px solid #ccc;
		`}
	}


	${({ $isDisabled }) => $isDisabled ? 'opacity: .5; pointer-events: none;' : ''};
`;

const StyledColBody = styled.div`
	${({ $isEnabled }) => $isEnabled ? '' : css`
		//opacity: .5;
		//pointer-events: none;
		//cursor: text;
	`}
`;

const StyledColHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 16px;
	border-bottom: 1px solid #ccc;

	> div {
		display: flex;
		&.titles {
			flex-direction: column;
			>:last-child {
				color: ${({ theme }) => theme.accent};
				font-size: 80%;
			}
		}
	}
`;

export const StyledColDivider = styled.div`
	${({ $hideTop }) => $hideTop ? '' : 'margin-top: 16px;'}
	${({ $hideBottom }) => $hideBottom ? '' : 'margin-bottom: 16px;'}
	border-bottom: 1px solid #ccc;
`;

const Col = ({ title, subtitle, actions, children, hasBorder = false, isOpen, setIsOpen, isDisabled = false }) => {

	return (
		<StyledCol $hasBorder={hasBorder} $isDisabled={isDisabled}>
			<StyledColHeader>
				<div className="titles">
					<h2>
						{title}
					</h2>
					<h3>
						{subtitle}
					</h3>
				</div>
				<div>
					{!hasBorder && <IconButton iconId={isOpen ? 'confirm' : 'edit'} onClick={() => setIsOpen(!isOpen)} />}
					<OverflowMenu items={actions} />
				</div>
			</StyledColHeader>
			<StyledColBody $isEnabled={!isOpen}>
				{children}
			</StyledColBody>
		</StyledCol>
	);
};

export default Col;
