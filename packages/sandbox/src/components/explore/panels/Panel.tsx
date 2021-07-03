import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";
import IconButton from "../../shared/ui/inputs/buttons/IconButton";

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
`;

const StyledPanelHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	//background-color: #e5e8e8;
	background: linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%);	
	height: 64px;
	padding: 0 16px;

	border-bottom: 1px solid ${({ theme }) => theme.border};
	border-left: 1px solid ${({ theme }) => theme.border};
	border-right: 1px solid ${({ theme }) => theme.border};

	position: sticky;
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

const StyledPanelBody = styled.div`
	padding: 8px 16px;
	position: sticky;
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
		<StyledPanel className={`panel ${title}`}>
			<StyledPanelHeader className="header">
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
			<StyledPanelBody $isEnabled={true}>
				{children}
			</StyledPanelBody>
		</StyledPanel>
	);
};

export default Panel;
