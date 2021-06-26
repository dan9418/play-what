import React from "react";
import styled, { css } from 'styled-components';
import OverflowMenu from "./OverflowMenu";

const StyledCol = styled.div`
	max-width: 512px;
	width: 100%;
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
	display: flex;
	flex-direction: column;	

	:first-child {
		border-right: 1px solid ${({ theme }) => theme.border};
	}
	
	@media(min-width: 1024px) {
		:not(:first-child) {
			margin-top: 0;
		}
		${({ $hasBorder }) => !$hasBorder ? '' : css`
			border-right: 1px solid ${({ theme }) => theme.border};
		`}
	}


	${({ $isDisabled }) => $isDisabled ? 'opacity: .5; pointer-events: none;' : ''};
`;

const StyledColBody = styled.div`
	padding: 16px;
	position: sticky;
`;

const StyledColHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #e5e8e8;

	height: 64px;
	padding: 0 24px 0 16px;

	border-bottom: 1px solid ${({ theme }) => theme.border};

	position: sticky;
	top: ${({ $isCompact }) => $isCompact ? 32 : 32}px;
	z-index: 100;

	> div {
		display: flex;
		&.titles {
			flex-direction: column;
			>:last-child {
				color: ${({ theme }) => theme.accent};
				font-size: 80%;
				font-weight: normal;
			}
		}
	}
`;

export const StyledColDivider = styled.div`
	${({ $hideTop }) => $hideTop ? '' : 'margin-top: 16px;'}
	${({ $hideBottom }) => $hideBottom ? '' : 'margin-bottom: 16px;'}
	border-bottom: 1px solid ${({ theme }) => theme.border};
`;

interface IColProps {
	title: string;
	subtitle?: string;
	actions?: any[];
	children: any;
	hasBorder?: boolean;
	isOpen?: boolean;
	setIsOpen?: any;
}

const Col: React.FC<IColProps> = ({ title, subtitle, actions = [], children = null, hasBorder = false }) => {

	return (
		<StyledCol $hasBorder={hasBorder}>
			<StyledColHeader $isCompact={false}>
				<div className="titles">
					<h2>
						{title}
					</h2>
					<h3>
						{subtitle}
					</h3>
				</div>
				<div>
					<OverflowMenu items={actions} />
				</div>
			</StyledColHeader>
			<StyledColBody $isEnabled={true} $hasBorder={hasBorder} $isCompact={false}>
				{children}
			</StyledColBody>
		</StyledCol>
	);
};

export default Col;
