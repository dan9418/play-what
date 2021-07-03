import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../contexts/ModalContext";
import IconButton from "../shared/ui/inputs/buttons/IconButton";

const StyledPanel = styled.div`
	max-width: 512px;
	width: 100%;
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
	display: flex;
	flex-direction: column;

	.header {
		border-top: 1px solid ${({ theme }) => theme.border};
	}

	:first-child {
		@media(min-width: 512px) {
			border-right: 1px solid ${({ theme }) => theme.border};
		}
		
		.header {
			border-right: none;
		}
	}
	:nth-child(2) {
		.header {
			border-left: none;
		}
	}

	@media(min-width: 1024px) {
		:not(:first-child) {
			margin-top: 0;
		}
	}


	${({ $isDisabled }) => $isDisabled ? 'opacity: .5; pointer-events: none;' : ''};
`;

const StyledPanelBody = styled.div`
	padding: 8px 16px;
	position: sticky;
`;

const StyledPanelHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	//background-color: #e5e8e8;
	//background: rgb(229,232,232);
	background: linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%);	
	height: 64px;
	padding: 0 16px;

	border-bottom: 1px solid ${({ theme }) => theme.border};
	border-left: 1px solid ${({ theme }) => theme.border};
	border-right: 1px solid ${({ theme }) => theme.border};

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

export const StyledPanelDivider = styled.div`
	${({ $hideTop }) => $hideTop ? '' : 'margin-top: 16px;'}
	${({ $hideBottom }) => $hideBottom ? '' : 'margin-bottom: 16px;'}
	border-bottom: 1px solid ${({ theme }) => theme.border};
`;

interface IPanelProps {
	title: string;
	subtitle?: string;
	modal: any;
	children: any;
	hasBorder?: boolean;
	isOpen?: boolean;
	setIsOpen?: any;
}

const Panel: React.FC<IPanelProps> = ({ title, subtitle, modal, children = null }) => {

	const modalContext = useModalContext();

	return (
		<StyledPanel>
			<StyledPanelHeader $isCompact={false} className="header">
				<div className="titles">
					<h2>
						{title}
					</h2>
					<h3>
						{subtitle}
					</h3>
				</div>
				<div>
					<IconButton iconId="edit" onClick={() => modalContext.setModalContent(modal)} />
				</div>
			</StyledPanelHeader>
			<StyledPanelBody $isEnabled={true} $isCompact={false}>
				{children}
			</StyledPanelBody>
		</StyledPanel>
	);
};

export default Panel;
