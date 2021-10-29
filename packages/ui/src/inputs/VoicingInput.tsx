
import React from "react";
import styled from 'styled-components';
import LabelledInput from "../../../app/src/components/shared/labelled-input/LabelledInput";
import { VOICINGS } from "../../../core/src/models/PodList/Chord/Chord.constants";
import DropdownInput from "./DropdownInput";

const StyledVoicingInput = styled.div`
    display: grid;
    grid-template-columns: auto;
    gap: 8px;
`;

const VoicingInput: React.FC<any> = editProps => {

    const { viewerProps, setViewerProps } = editProps;

    return (
        <StyledVoicingInput>

            <LabelledInput text="Preset">
                <DropdownInput
                    options={VOICINGS}
                    value={viewerProps.voicing}
                    setValue={option => setViewerProps({ ...viewerProps, voicing: option })}
                />
            </LabelledInput>

        </StyledVoicingInput >
    );
};

export default VoicingInput;
