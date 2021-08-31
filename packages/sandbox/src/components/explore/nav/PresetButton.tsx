import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { useModalContext } from '../../../contexts/ModalContext';
import ImportPresetModal from '../modals/ImportPresetModal';

export const StyledPresetButton = styled.div`
    display: flex;

    button {
        height: 48px;
        margin: 0 8px;

        background-color: ${({ theme }) => theme.accent};
        :hover {
            background-color: ${({ theme }) => theme.accent};
        }
    
        border: none;

        cursor: pointer;
        font-weight: bold;
        letter-spacing: 1px;
        color: white;

        border-radius: 4px;
        padding: 8px 16px;
    }
`

const PresetButton: React.FC<CSSProperties> = () => {

    const modalContext = useModalContext();

    return (
        <StyledPresetButton>
            <button type="button" onClick={() => modalContext.setModal(<ImportPresetModal />)} >IMPORT PRESET</button>
        </StyledPresetButton>
    );
};

export default PresetButton;
