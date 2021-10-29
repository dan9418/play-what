import React, { useState } from "react";
import styled from 'styled-components';
import { INTERVALS_INPUTS } from "../../../../../ui/src/inputs/IntervalsInput";
import { FRETBOARD_INPUTS, LABEL_INPUTS, VOICING_INPUTS } from "../../../../../ui/src/viewers/Viewer.constants";
import useEditProps from "../../../hooks/useEditProps";
import LabelledInput from "../../shared/labelled-input/LabelledInput";
import TabList from "../../shared/tab-list/TabList";
import { getInputComponent, ROOT_INPUTS } from "./InputManagers";

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
        inputs: [
            ...ROOT_INPUTS,
            ...INTERVALS_INPUTS
        ]
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
                {selectedTab.inputs.map((input, i) => {
                    const InputComponent = getInputComponent(input.inputId);
                    const inputProps = input.inputMapper(editProps, input);
                    return (
                        <LabelledInput key={i} text={input.propName}>
                            <InputComponent {...inputProps} />
                        </LabelledInput>
                    );
                })}
            </div>
        </StyledEditPanel>
    );
};

export default EditPanel;
