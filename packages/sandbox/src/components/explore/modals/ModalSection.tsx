import React, { useState } from 'react';
import styled from 'styled-components';
import THEME from '../../../styles/theme';
import ButtonInput from '../../shared/inputs/ButtonInput';
import IconButton from '../../shared/inputs/IconButton';

const StyledModalSection = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    border-bottom: 1px solid ${THEME.border};
    margin: 16px 0 8px;
    padding: 8px 0;

    button {
        background: transparent;
        &:hover {
            background: rgba(0,0,0,0.05);
        }
        color: ${({ theme }) => theme.clickable};
        padding: 4px 8px;
        margin-left: 8px;

        &:last-child {
            padding: 8px;
            margin-left: auto;
        }
    }

    h3 {
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.text.medium};
        font-size: 140%;
        font-weight: 500;
    }
`;

interface IModalSectionProps {
    title: string;
    buttonText?: string;
    buttonAction?: Function;
}

const ModalSection: React.FC<IModalSectionProps> = ({ title, buttonText, buttonAction, children }) => {

    const [isOpen, setIsOpen] = useState(true);

    console.log(isOpen);

    return (
        <>
            <StyledModalSection>
                <h3>{title}</h3>
                {isOpen && buttonAction && <ButtonInput onClick={buttonAction}>{buttonText}</ButtonInput>}
                <IconButton iconId="down" onClick={() => setIsOpen(!isOpen)} iconProps={{ rotate: isOpen ? 0 : 270 }} />

            </StyledModalSection>
            {isOpen && children}
        </>
    );
}

export default ModalSection;
