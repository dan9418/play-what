import React from "react";
import styled from 'styled-components';
import { MenuList } from "../menu/MenuList";

const StyledEditPanel = styled.div`
    margin: 16px 0;
    padding: 16px;
    background: ${({ theme }) => theme.surface.highlight};
    border-radius: 8px;
    border: 1px solid #ccc;
`;


const EditPanel: React.FC<any> = () => {

    return (
        <StyledEditPanel>
            <h2>Edit</h2>
            <MenuList isVertical />
        </StyledEditPanel>
    );
};

export default EditPanel;
