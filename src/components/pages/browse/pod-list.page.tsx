import React from "react";
import styled from "styled-components";
import { ModelPageProps } from "../../../contexts/PagePropsContext";
import { IChordPreset } from "../../../core/models/Chord.presets";
import { PresetType } from "../../../core/models/Model.constants";
import { INotePreset } from "../../../core/models/Note.presets";
import { getNoteFromId } from "../../../core/models/Note.utils";
import { getModelConfigById } from "../../../core/models/Pod.utils";
import { IScalePreset } from "../../../core/models/Scale.presets";
import DetailsCard from "../../cards/DetailsCard";
import FretboardCard from "../../cards/FretboardCard";
import ModeCard from "../../cards/ModeCard";
import RelatedCard from "../../cards/RelatedCard";
import RomanNumeralsCard from "../../cards/RomanNumeralsCard";
import RootCard from "../../cards/RootCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledPodlistPage = styled(PageLayout)``;

const PodListPage: React.FC<ModelPageProps> = (props) => {
  const { presetType, presetId, rootId } = props.pageContext;

  const modelConfig = getModelConfigById(presetType, presetId) as
    | IChordPreset
    | IScalePreset;
  const rootModelConfig = getNoteFromId(rootId);

  const title = `${rootId ? (getNoteFromId(rootId) as INotePreset).name : ""} ${
    modelConfig.name
  }`;

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        <ColumnManager tablet={["300px", "auto"]}>
          <RootCard />
          <DetailsCard
            modelConfig={modelConfig}
            rootModelConfig={rootModelConfig}
          />
        </ColumnManager>
        {presetType === PresetType.Scale && (
          <RomanNumeralsCard
            modelConfig={modelConfig}
            rootModelConfig={rootModelConfig}
          />
        )}
        {presetType === PresetType.Scale && (
          <ModeCard
            modelConfig={modelConfig}
            rootModelConfig={rootModelConfig}
          />
        )}
        <FretboardCard
          modelConfig={modelConfig}
          rootModelConfig={rootModelConfig}
        />
        <RelatedCard
          modelConfig={modelConfig}
          rootModelConfig={rootModelConfig}
        />
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
