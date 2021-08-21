import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import IconButton from '../../shared/inputs/IconButton';

export const StyledActionBox = styled.div`
    display: flex;

    button {
        height: 48px;
        margin: 0 8px;

        background-color: rgba(0,0,0,0.2);
        :hover {
            background-color: rgba(0,0,0,0.3);
        }

        &:last-child {
            background-color: ${({ theme }) => theme.accent};
            :hover {
                background-color: ${({ theme }) => theme.active};
            }
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

const ActionBox: React.FC<CSSProperties> = () => {
    return (
        <StyledActionBox>
            <IconButton iconId="speaker" className="sound" color="white" onClick={() => null} />
            <IconButton iconId="more" className="settings" color="white" onClick={() => null} />
            <button type="button" onClick={() => null} >IMPORT PRESET</button>
        </StyledActionBox>
    );
};

export default ActionBox;
