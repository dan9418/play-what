
import React from "react";
import styled from 'styled-components';
import TabList from "../../../app/src/components/shared/tab-list/TabList";


const StyledButtonInputRow = styled.div`
    border: 1px solid #bbb;
    background: ${({ theme }) => theme.surface.gradient};
    display: inline-block;
    border-radius: 4px;

    li  {
        &:first-child button {
            border-radius: 4px 0 0 4px;
        }
        &:last-child button {
            border-radius: 0 4px 4px 0;
        }
    }
`;


const ButtonInputRow: React.FC<any> = ({ value, setValue, options }) => {
    return (
        <StyledButtonInputRow>
            <TabList options={options.map(o => ({ ...o, isActive: value === o.value, onClick: () => setValue(o.value) }))} />
        </StyledButtonInputRow>
    );
};

export default ButtonInputRow;
