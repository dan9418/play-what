import React from "react";
import styled from 'styled-components';
import IntervalsInputBasic from "../../../../../ui/src/inputs/IntervalsInputBasic";
import RootInputBasic from "../../../../../ui/src/inputs/RootInputBasic";
import TabList from "../../shared/tab-list/TabList";
import { MenuList } from "../../shared/menu-list/MenuList";

const StyledEditPanel = styled.div`
    border-bottom: 1px solid #bbb;
    width: 100%;

    & > .content {
        padding: 0 16px;
    }
    & > ul {
        border-bottom: 1px solid #bbb;
        background: ${({ theme }) => theme.surface.gradient};
    }
`;


const EditPanel: React.FC<any> = () => {
    return (
        <StyledEditPanel>
            <TabList options={[
                {
                    text: 'Summary'
                },
                {
                    text: 'Notes',
                    isActive: true
                },
                {
                    text: 'Voicing'
                },
                {
                    text: 'Fretboard'
                },
                {
                    text: 'Labels'
                },
                {
                    text: 'Sound'
                },
                {
                    text: 'Transform'
                },
                {
                    text: 'Related'
                }
            ]} />
            <div className="content">
                <MenuList menuItems={[
                    {
                        text: 'Root',
                        component: RootInputBasic
                    },
                    {
                        text: 'Intervals',
                        component: IntervalsInputBasic
                    }
                ]} />
            </div>
            <TabList options={[]} />
        </StyledEditPanel>
    );
};

export default EditPanel;
