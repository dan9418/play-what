import React, { useState } from "react";
import styled from "styled-components";
import { getRootedName } from "../../../../core/Pod.utils";
import Fretboard from "../../shared/fretboard/Fretboard";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import Card from "../../shared/ui/Card";
import { StyledCardSection } from "./CardSection";
import DetailsCol from "./DetailsCol";
import FretboardCol from "./FretboardCol";
import MainCol from "./MainCol";
import MaximizeButton from "./MaximizeButton";
import NotesCol from "./NotesCol";
import useFretboardState from "./useFretboardState";
import useModelQueryParams from "./useModelQueryParams";
import useModelState from "./useModelState";

const StyledFretboardPage = styled(PageLayout)`
  ${StyledCardSection} {
    margin-top: 16px;
  }
`;

const Page: React.FC = () => {
    const [qpPresetType, qpPresetId, qpRootId] = useModelQueryParams();

    const modelState = useModelState(qpPresetType, qpPresetId, qpRootId);
    const {
        presetType,
        setPresetType,
        presetConfig,
        setPresetConfig,
        root,
        setRoot
    } = modelState;

    const fretboardState = useFretboardState();

    const title = getRootedName(presetConfig, root);

    const [isFullScreen, setIsFullScreen] = useState(false);

    const mainColProps = {
        isFullScreen,
        setIsFullScreen,
        viewer: (
            <Fretboard
                podListPreset={presetConfig}
                rootNotePreset={root}
                fretRange={fretboardState.fretRange}
                showFretDots={fretboardState.showFretDots}
                showFretNumbers={fretboardState.showFretNumbers}
                //colorSchemeId={fretboardState.colorScheme}
                //voicingId={fretboardState.voicing.presetId}
                tuningId={fretboardState.tuning.presetId}
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
                        <DetailsCol {...modelState} />
                        <NotesCol {...modelState} />
                        <FretboardCol {...fretboardState} />
                    </Card>
                </div>
            </ColumnManager>
        </StyledFretboardPage>
    );
};

export default Page;
