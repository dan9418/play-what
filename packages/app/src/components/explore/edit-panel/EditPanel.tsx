import React from "react";
import styled from 'styled-components';
import TabList from "../../shared/tab-list/TabList";
import { MenuList } from "../menu/MenuList";

const StyledEditPanel = styled.div`
  
    border-bottom: 1px solid #ccc;
    width: 100%;

    & > .content {
        padding: 0 16px;
    }
    & > ul {
        border-bottom: 1px solid #ccc;
        background: ${({ theme }) => theme.surface.gradient};
    }
`;


const EditPanel: React.FC<any> = () => {

    return (
        <StyledEditPanel>
            <TabList options={[
                {
                    text: 'Position'
                },
                {
                    text: 'Notes',
                    isActive: true
                },
                {
                    text: 'Viewer'
                },
                {
                    text: 'Sound'
                },
                {
                    text: 'Color'
                }
            ]} />
            <div className="content">
                <MenuList isVertical />
            </div>
        </StyledEditPanel>
    );
};

export default EditPanel;
