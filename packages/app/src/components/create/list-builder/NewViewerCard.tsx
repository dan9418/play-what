import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { NoteId, NOTE_PRESET_MAP } from "../../../../../core/src/models/Pod/Note/Note.constants";
import ButtonInput from "../../../../../ui/src/inputs/ButtonInput";
import DEFAULT_FRETBOARD_PROPS from "../../../../../ui/src/viewers/fretboard/Fretboard.defaults";
import { dataListState } from "../../../state/state";
import { ROOT_INPUTS } from "../edit-panel/InputManagers";

const StyledNewViewerCard = styled.div`
    width: 100%;
    max-width: 512px;
    height: 100%;
    padding: 16px;

    margin: auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #fafafa;
    border-radius: 8px;

    .footer {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        width: 100%;
    }
`;

const DEFAULT_VIEWER = {
    root: NOTE_PRESET_MAP.get(NoteId.C).value,
    intervals: [],
    viewerProps: DEFAULT_FRETBOARD_PROPS
}

const NewViewerCard: React.FC<any> = ({ onDone }) => {
    const [dataList, setDataList] = useRecoilState(dataListState);

    const [step, setStep] = useState(0);
    const [type, setType] = useState(undefined);

    const [root, setRoot] = useState(DEFAULT_VIEWER.root);
    const [intervals, setIntervals] = useState(DEFAULT_VIEWER.intervals);

    const insertViewer = () => {
        setDataList([
            ...dataList,
            {
                ...DEFAULT_VIEWER,
                root,
                intervals
            }
        ]);
        onDone();
    }

    return (
        <StyledNewViewerCard >
            <h2>{step === 0 ? 'Select Root' : 'Select Intervals'}</h2>
            {step === 0 &&
                <>
                    <ROOT_INPUTS
                </>
            }
            {step === 0 &&
                <>

                </>
            }
            <div className="footer">
                {step === 0 &&
                    <ButtonInput onClick={() => setStep(step + 1)}>
                        Next
                    </ButtonInput>
                }
                {step === 1 &&
                    <>
                        <ButtonInput onClick={() => setStep(step - 1)}>
                            Back
                        </ButtonInput>
                        <ButtonInput onClick={insertViewer}>
                            Done
                        </ButtonInput>
                    </>
                }
            </div>
        </StyledNewViewerCard>
    );
};

export default NewViewerCard;
