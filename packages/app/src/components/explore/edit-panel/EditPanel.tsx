import React, { useState } from "react";
import styled from 'styled-components';
import { FRETBOARD_INPUTS, LABEL_INPUTS, VOICING_INPUTS } from "../../../../../ui/src/viewers/Viewer.constants";
import useEditProps from "../../../hooks/useEditProps";
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
        inputs: []
    },
    {
        text: 'Notes',
        inputs: []
    },
    {
        text: 'Voicing',
        inputs: VOICING_INPUTS
    },
    {
        text: 'Fretboard',
        inputs: FRETBOARD_INPUTS
    },
    {
        text: 'Labels',
        inputs: LABEL_INPUTS
    }
];

const EditPanel: React.FC<any> = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);
    const selectedTab = EDIT_TABS[selectedTabIndex];

    const tabs = EDIT_TABS.map((tab, i) => ({
        text: tab.text,
        isActive: i === selectedTabIndex,
        onClick: () => setSelectedTabIndex(i)
    }))

    return (
        <StyledEditPanel>
            <TabList options={tabs} />
            <div className="content">
                {selectedTab.inputs.map(input => (
                    <input.inputManager key={input.propId} input={input} />
                ))}
            </div>
        </StyledEditPanel>
    );
};

export default EditPanel;
