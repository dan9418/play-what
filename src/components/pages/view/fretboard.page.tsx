import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_SCHEMES } from "../../../core/color/Color.utils";
import Fretboard from "../../../viewers/fret-table/Fretboard";
import {
  IFretProps,
  isIntervalInVoicing,
} from "../../../viewers/fretboard/Fretboard.utils";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import { StyledCardSection } from "./CardSection";
import DetailsCol from "./DetailsCol";
import FretboardCol, {
  DEFAULT_FRET_RANGE,
  DEFAULT_TUNING,
  DEFAULT_VOICING,
} from "./FretboardCol";
import MainCol from "./MainCol";
import MaximizeButton from "./MaximizeButton";
import NotesCol from "./NotesCol";
import useModelQueryParams from "./useModelQueryParams";
import { useModelState } from "./useModelState";

const StyledFretboardPage = styled(PageLayout)`
  ${StyledCardSection} {
    margin-top: 16px;
  }
`;

const Page: React.FC = () => {
  const [qpModelType, qpModelId, qpRootId] = useModelQueryParams();
  const modelState = useModelState(qpModelType, qpModelId, qpRootId);
  const {
    modelType,
    setModelType,
    modelConfig,
    setModelConfig,
    root,
    setRoot,
    model,
    setModel,
  } = modelState;

  const [voicing, setVoicing] = useState(DEFAULT_VOICING);
  const [tuning, setTuning] = useState(DEFAULT_TUNING);
  const [fretRange, setFretRange] = useState(DEFAULT_FRET_RANGE);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [colorScheme, _setColorScheme] = useState(COLOR_SCHEMES[1]);
  const [colorConfig, setColorConfig] = useState(colorScheme.defaultConfig);

  const setColorScheme = (cs) => {
    _setColorScheme(cs);
    setColorConfig(cs.defaultConfig);
  };

  const instrumentColProps = {
    model,
    voicing,
    setVoicing,
    tuning,
    setTuning,
    fretRange,
    setFretRange,
  };

  const notesColProps = {
    modelType,
    setModelType,
    modelConfig,
    setModelConfig,
    root,
    setRoot,
    model,
    setModel,
    instrumentName: "Fretboard",
    instrumentTuning: instrumentColProps.tuning.name,
    colorScheme,
    setColorScheme,
    colorConfig,
    setColorConfig,
  };

  const colorMapFn = (props: IFretProps) => {
    const { stringIndex, fretIndex, tuning, model, voicing } = props;
    // @ts-ignore
    const noteIndex = tuning[stringIndex] + fretIndex;
    // @ts-ignore
    const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

    const cs = COLOR_SCHEMES.find((cs) => cs.id === colorScheme.id);

    if (!cs) return;

    const color = cs.fn(note, interval, colorConfig);

    if (
      color &&
      voicing &&
      !isIntervalInVoicing(interval, voicing, stringIndex)
    ) {
      return `${color}33`;
    }

    return color;
  };

  const mainColProps = {
    isFullScreen,
    setIsFullScreen,
    viewer: (
      <Fretboard
        {...instrumentColProps}
        {...notesColProps}
        colorMapFn={colorMapFn as any}
        tuning={instrumentColProps.tuning.value}
      />
    ),
  };

  return (
    <StyledFretboardPage
      title="Fretboard"
      subtitle={model.name}
      action={<MaximizeButton onClick={() => setIsFullScreen(true)} />}
    >
      <ColumnManager desktop={["1fr", "1fr"]}>
        <MainCol {...mainColProps} />
        <div>
          <Card>
            <DetailsCol {...notesColProps} />
            <NotesCol {...notesColProps} />
            <FretboardCol {...instrumentColProps} />
          </Card>
        </div>
      </ColumnManager>
    </StyledFretboardPage>
  );
};

export default Page;
