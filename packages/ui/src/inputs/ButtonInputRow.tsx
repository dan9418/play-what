
import React from "react";
import styled from 'styled-components';

const StyledButtonInputRow = styled.div`

    display: flex;

    button {
        appearance: none;
        background-color: ${({ theme }) => theme.surface.highlight};
        border: none;
        //background-color: ${({ theme }) => theme.surface.highlight};;
        //color: ${({ theme }) => theme.text.medium};
        font-weight: bold;

        border: 1px solid #aaa;

        //border-radius: 4px;
        padding: 8px;

        &:first-child {
            border-radius: 4px 0 0 4px;
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
        }
        &:active {
            background-color: ${({ theme }) => theme.active};
        }

        width: 32px;
        height: 32px;

        &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.clickable};
            border-color: ${({ theme }) => theme.clickable};
            color: white;
        }

        &.active {
            background-color: ${({ theme }) => theme.active};
            border-color: ${({ theme }) => theme.active};
            color: white;
            font-weight: bold;
        }
    }
`;

const RootButton = ({ value, setValue, option }) => {
    const className = value === option.value ? 'active' : undefined;
    return (
        <button type="button" onClick={() => setValue(option.value)} className={className}>{option.text}</button>
    );
}

const ButtonInputRow: React.FC<any> = ({ value, setValue, options }) => {
    return (
        <StyledButtonInputRow>
            {options.map(option => <RootButton key={option.text} value={value} setValue={setValue} option={option} />)}
        </StyledButtonInputRow>
    );
};

export default ButtonInputRow;
