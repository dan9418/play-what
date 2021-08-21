import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import IconButton from '../../shared/inputs/IconButton';

const StyledActionBox = styled.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: 1fr 1fr;

    button {

        background-color: rgba(0,0,0,0.3);
        :hover {
            background-color: rgba(0,0,0,0.2);
        }

        &:first-child {
            grid-column: 1 / 3;

            background-color: ${({ theme }) => theme.accent};
            :hover {
                background-color: ${({ theme }) => theme.active};
            }
        }

        border: none;
        height: 24px;
        width: 100%;

        cursor: pointer;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 80%;
        color: white;

        border-radius: 4px;
        padding: 4px 8px;
    }
`

const ActionBox: React.FC<CSSProperties> = () => {
    return (
        <StyledActionBox>
            <button type="button" onClick={() => null} >IMPORT PRESET</button>
            <IconButton iconId="speaker" className="sound" color="white" onClick={() => null} />
            <IconButton iconId="more" className="settings" color="white" onClick={() => null} />
        </StyledActionBox>
    );
};

export default ActionBox;
