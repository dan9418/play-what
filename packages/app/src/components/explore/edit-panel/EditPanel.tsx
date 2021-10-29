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
        text: 'Summary',
        menuItems: []
    },
    {
        text: 'Notes',
        menuItems: [
            {
                text: 'Root',
                component: RootInputBasic
            },
            {
                text: 'Intervals',
                component: IntervalsInputBasic
            }
        ]
    },
    {
        text: 'Voicing',
        menuItems: []
    },
    {
        text: 'Fretboard',
        menuItems: []
    },
    {
        text: 'Labels',
        menuItems: []
    },
    {
        text: 'Sound',
        menuItems: []
    },
    {
        text: 'Transform',
        menuItems: []
    },
    {
        text: 'Related',
        menuItems: []
    }
];

const EditPanel: React.FC<any> = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);
    const selectedTab = EDIT_TABS[selectedTabIndex];
    const menuItems = selectedTab.menuItems;

    const tabs = EDIT_TABS.map((tab, i) => ({
        text: tab.text,
        isActive: i === selectedTabIndex,
        onClick: () => setSelectedTabIndex(i)
    }))

    return (
        <StyledEditPanel>
            <TabList options={tabs} />
            <div className="content">
                <MenuList menuItems={menuItems} />
            </div>
        </StyledEditPanel>
    );
};

export default EditPanel;
