import React, { useState } from "react";
import styled from 'styled-components';
import FretboardInput from "../../../../../ui/src/inputs/FretboardInput";
import IntervalsInputBasic from "../../../../../ui/src/inputs/IntervalsInputBasic";
import RootInputBasic from "../../../../../ui/src/inputs/RootInputBasic";
import VoicingInput from "../../../../../ui/src/inputs/VoicingInput";
import useEditProps from "../../../hooks/useEditProps";
import { MenuList } from "../../shared/menu-list/MenuList";
import TabList from "../../shared/tab-list/TabList";

const StyledEditPanel = styled.div`
    border-bottom: 1px solid #bbb;
    width: 100%;

    & > .content {
        padding: 16px;
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
        menuItems: VoicingInput
    },
    {
        text: 'Fretboard',
        menuItems: FretboardInput
    },
    {
        text: 'Labels',
        menuItems: []
    }
    /*{
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
    }*/
];

const EditPanel: React.FC<any> = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);
    const selectedTab = EDIT_TABS[selectedTabIndex];
    const editProps = useEditProps();

    const tabs = EDIT_TABS.map((tab, i) => ({
        text: tab.text,
        isActive: i === selectedTabIndex,
        onClick: () => setSelectedTabIndex(i)
    }))

    return (
        <StyledEditPanel>
            <TabList options={tabs} />
            <div className="content">
                {Array.isArray(selectedTab.menuItems) ?
                    <MenuList menuItems={selectedTab.menuItems} sharedProps={editProps} />
                    :
                    <selectedTab.menuItems {...editProps} />
                }
            </div>
        </StyledEditPanel>
    );
};

export default EditPanel;
