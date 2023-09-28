import React, { useState } from "react";
import styled from "styled-components";

import { COLOR_SCHEME_PRESETS } from "../../../../core/Color.utils";
import { getRootedName } from "../../../../core/Pod.utils";
import Fretboard from "../../shared/fretboard/Fretboard";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import Card from "../../shared/ui/Card";
import { StyledCardSection } from "./CardSection";
import FretboardCol, {
    DEFAULT_FRET_RANGE,
    DEFAULT_TUNING,
    DEFAULT_VOICING,
} from "./FretboardCol";
import MainCol from "./MainCol";
import MaximizeButton from "./MaximizeButton";
import useModelQueryParams from "./useModelQueryParams";
import useModelState from "./useModelState";

const StyledFretboardPage = styled(PageLayout)`
  ${StyledCardSection} {
    margin-top: 16px;
  }
`;

const Page: React.FC = () => {
    const [qpPresetType, qpPresetId, qpRootId] = useModelQueryParams();

    const {
        presetType,
        setPresetType,
        presetConfig,
        setPresetConfig,
        root,
        setRoot
    } = useModelState(qpPresetType, qpPresetId, qpRootId);

    const title = getRootedName(presetConfig, root);

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
                podListPreset={presetConfig}
                rootNotePreset={root}
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
