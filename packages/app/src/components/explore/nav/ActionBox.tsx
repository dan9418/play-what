import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import IconButton from '../../../../../viewers/src/inputs/IconButton';

export const StyledActionBox = styled.div`
    display: flex;

    button {
        height: 48px;
        margin: 0 8px;

        background-color: rgba(0,0,0,0.2);
        :hover {
            background-color: rgba(0,0,0,0.3);
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
    return null;
    return (
        <StyledActionBox>
            <IconButton iconId="speaker" className="sound" color="white" onClick={() => null} />
            <IconButton iconId="more" className="settings" color="white" onClick={() => null} />
        </StyledActionBox>
    );
};

export default ActionBox;
