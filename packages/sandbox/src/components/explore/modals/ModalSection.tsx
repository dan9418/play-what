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
    }

    h3 {
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.text.medium};
        font-size: 140%;
        font-weight: 500;
    }

    .actions {
        margin-left: auto;
        button {
            padding: 8px;
        }
    }
`;

const StyledHelp = styled.pre`
    background: ${THEME.status.info};
    color: white;
    padding: 8px 16px;
    margin-bottom: 8px;
    border-radius: 8px;
    font-family: sans-serif;
    font-size: 90%;
    line-height: 24px;

    //display: flex;
    //align-items: center;
    //justify-content: flex-start;
`;

interface IModalSectionProps {
    title: string;
    buttonText?: string;
    buttonAction?: Function;
    helpText?: string;
}

const ModalSection: React.FC<IModalSectionProps> = ({ title, buttonText, buttonAction, helpText, children }) => {

    const [isOpen, setIsOpen] = useState(true);
    const [isHelp, setIsHelp] = useState(false);

    console.log(isOpen);

    return (
        <>
            <StyledModalSection>
                <h3>{title}</h3>
                {isOpen && buttonAction && <ButtonInput onClick={buttonAction}>{buttonText}</ButtonInput>}
                <div className="actions">
                    {isOpen && <IconButton iconId="help" onClick={() => setIsHelp(!isHelp)} color={isHelp ? THEME.active : THEME.status.info} />}
                    <IconButton iconId="down" onClick={() => setIsOpen(!isOpen)} iconProps={{ rotate: isOpen ? 0 : 270 }} />
                </div>
            </StyledModalSection>
            {isHelp && helpText && <StyledHelp>{helpText}</StyledHelp>}
            {isOpen && children}
        </>
    );
}

export default ModalSection;
