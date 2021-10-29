import React, { useState } from "react";
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

const EDIT_TABS = [
    {
        text: 'Summary'
    },
    {
        text: 'Notes'
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
]


const EditPanel: React.FC<any> = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);


    return (
        <StyledEditPanel>
            <TabList options={EDIT_TABS.map((tab, i) => ({
                ...tab,
                isActive: i === selectedTabIndex,
                onClick: () => setSelectedTabIndex(i)
            }))} />
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
        </StyledEditPanel>
    );
};

export default EditPanel;
