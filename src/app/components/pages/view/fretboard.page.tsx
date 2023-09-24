import React, { useState } from "react";
import styled from "styled-components";

import { ChordId } from "../../../../core/Chord.constants";
import { COLOR_SCHEME_PRESETS } from "../../../../core/Color.utils";
import { PresetType } from "../../../../core/Core.constants";
import { AnyPodListPreset, getPreset } from "../../../../core/Core.derived";
import { INotePreset, NoteId } from "../../../../core/Note.constants";
import { getRootedName } from "../../../../core/Pod.utils";
import Fretboard from "../../shared/fretboard/Fretboard";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import Card from "../../shared/ui/Card";
import { StyledCardSection } from "./CardSection";
import DetailsCol from "./DetailsCol";
import FretboardCol, {
    DEFAULT_FRET_RANGE,
    DEFAULT_TUNING,
    DEFAULT_VOICING,
} from "./FretboardCol";
import MainCol from "./MainCol";
import MaximizeButton from "./MaximizeButton";
import useModelQueryParams from "./useModelQueryParams";

const StyledFretboardPage = styled(PageLayout)`
  ${StyledCardSection} {
    margin-top: 16px;
  }
`;

const DEFAULT = {
    presetType: PresetType.Chord,
    presetId: ChordId.MajTriad,
    rootId: NoteId.C
}

const Page: React.FC = () => {
    const [presetType, presetId, rootId] = useModelQueryParams();

//   const modelState = useModelState(qpModelType, qpModelId, qpRootId);
//   const {
//     modelType,
//     setModelType,
//     modelConfig,
//     setModelConfig,
//     root,
//     setRoot,
//     model,
//     setModel,
//   } = modelState;

    // @ts-ignore
    const podListPreset = getPreset(presetType, presetId) as AnyPodListPreset;
    // @ts-ignore
    const rootNotePreset = getPreset(PresetType.Note, rootId) as INotePreset;

    const title = getRootedName(podListPreset, rootNotePreset);

    const [voicing, setVoicing] = useState(DEFAULT_VOICING);
    const [tuning, setTuning] = useState(DEFAULT_TUNING);
    const [fretRange, setFretRange] = useState(DEFAULT_FRET_RANGE);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [colorScheme, _setColorScheme] = useState(COLOR_SCHEME_PRESETS[1]);
    const [colorConfig, setColorConfig] = useState(colorScheme.defaultConfig);

    const setColorScheme = (cs) => {
        _setColorScheme(cs);
        setColorConfig(cs.defaultConfig);
    };

    const instrumentColProps = {
        voicing,
        setVoicing,
        tuning,
        setTuning,
        fretRange,
        setFretRange,
    };

    // const notesColProps = {
    //     modelType,
    //     setModelType,
    //     modelConfig,
    //     setModelConfig,
    //     root,
    //     setRoot,
    //     model,
    //     setModel,
    //     instrumentName: "Fretboard",
    //     instrumentTuning: instrumentColProps.tuning.name,
    //     colorScheme,
    //     setColorScheme,
    //     colorConfig,
    //     setColorConfig,
    // };

    const mainColProps = {
        isFullScreen,
        setIsFullScreen,
        viewer: (
            <Fretboard
                podListPreset={podListPreset}
                rootNotePreset={rootNotePreset}
            />
        ),
    };

    return (
        <StyledFretboardPage
            title="Fretboard"
            subtitle={title}
            action={<MaximizeButton onClick={() => setIsFullScreen(true)} />}
        >
            <ColumnManager desktop={["1fr", "1fr"]}>
                <MainCol {...mainColProps} />
                <div>
                    <Card>
                        {/*<DetailsCol {...notesColProps} />*/}
                        {/*<NotesCol {...notesColProps} />*/}
                        <FretboardCol {...instrumentColProps} />
                    </Card>
                </div>
            </ColumnManager>
        </StyledFretboardPage>
    );
};

export default Page;
