import { fullPathState } from "@pw/sandbox/src/state/pathState";
import React from "react";
import { useRecoilValue } from "recoil";
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

	:not(:first-child) {
		margin-top: 8px;
	}
	
	@media(min-width: 1024px) {
		:not(:first-child) {
			margin-top: 0;
		}
		${({ $hasBorder }) => !$hasBorder ? '' : css`
			border-right: 1px solid #ccc;
		`}
	}


	${({ $isDisabled }) => $isDisabled ? 'opacity: .5; pointer-events: none;' : ''};
`;

const StyledColBody = styled.div`
	padding: 16px;
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

	height: 64px;
	padding: 0 24px 0 16px;

	border-bottom: 1px solid #ccc;

	position: sticky;
	top: ${({ $isCompact }) => $isCompact ? 32 : 80}px;
	z-index: 100;
	background-color: #ecefef;

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
	border-bottom: 1px solid #ccc;
`;

interface IColProps {
	title: string;
	subtitle?: string;
	actions: any[];
	children: any;
	hasBorder?: boolean;
	isOpen: boolean;
	setIsOpen: any;
}

const Col: React.FC<IColProps> = ({ title, subtitle, actions, children, hasBorder = false, isOpen, setIsOpen }) => {

	const fullPath = useRecoilValue(fullPathState);
	const isCompact = !fullPath || fullPath.length < 2;

	return (
		<StyledCol $hasBorder={hasBorder}>
			<StyledColHeader $isCompact={isCompact}>
				<div className="titles">
					<h2>
						{title}
					</h2>
					<h3>
						{subtitle}
					</h3>
				</div>
				<div>
					{/*!hasBorder && <IconButton iconId={isOpen ? 'confirm' : 'edit'} onClick={() => setIsOpen(!isOpen)} />*/}
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
