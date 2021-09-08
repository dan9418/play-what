import React from 'react';
import styled from 'styled-components';
import THEME from '../../../styles/theme';
import ButtonInput from '../../shared/inputs/ButtonInput';

const StyledModalSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${THEME.border};
    margin: 8px 0;
    padding: 8px 0;

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

const ModalSection: React.FC<IModalSectionProps> = ({ title, buttonText, buttonAction }) => {
    return (
        <StyledModalSection>
            <h3>{title}</h3>
            {buttonAction && <ButtonInput onClick={buttonAction}>{buttonText}</ButtonInput>}
        </StyledModalSection>
    );
}

export default ModalSection;
