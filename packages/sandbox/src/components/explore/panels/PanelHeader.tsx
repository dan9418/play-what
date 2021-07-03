import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";
import IconButton from "../../shared/ui/inputs/buttons/IconButton";

const StyledPanelHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	//background-color: #e5e8e8;
	background: linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%);	
	height: 64px;
	padding: 0 16px;

    border-top: 1px solid ${({ theme }) => theme.border};
	border-bottom: 1px solid ${({ theme }) => theme.border};

	position: sticky;
	top: 32px;

	@media(max-width: 1024px) {
		border-left: none !important;
		border-right: none !important;
	}

	position: sticky;
	z-index: 100;

	> div {
		display: flex;
		&.name-preview {
			flex-direction: column;
			.preview {
				color: ${({ theme }) => theme.accent};
				font-size: 80%;
				font-weight: normal;
			}
		}
	}
`;

interface IPanelHeaderProps {
    name: string;
    preview?: string;
    modal: any;
}

const PanelHeader: React.FC<IPanelHeaderProps> = ({ name, preview, modal }) => {

    const modalContext = useModalContext();

    return (
        <StyledPanelHeader className="panel-header">
            <div className="name-preview">
                <h2 className="name">
                    {name}
                </h2>
                <h3 className="preview">
                    {preview}
                </h3>
            </div>
            <div>
                <IconButton iconId="edit" onClick={() => modalContext.setModalContent(modal)} />
            </div>
        </StyledPanelHeader>
    );
};

export default PanelHeader;
