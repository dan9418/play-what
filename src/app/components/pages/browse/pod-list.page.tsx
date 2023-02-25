import React from "react";
import styled from "styled-components";
import { ModelPageProps } from "../../../contexts/PagePropsContext";
import { IChordPreset } from "../../../core/models/Chord.constants";
import { PresetType } from "../../../core/models/Model.constants";
import { INotePreset } from "../../../core/models/Note.constants";
import { getNoteFromId } from "../../../core/models/Note.utils";
import { getModelConfigById } from "../../../core/models/Pod.utils";
import { IScalePreset } from "../../../core/models/Scale.constants";
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

  const podListPreset = getModelConfigById(presetType, presetId) as
    | IChordPreset
    | IScalePreset;
  const rootNotePreset = getNoteFromId(rootId);

  const title = `${rootId ? (getNoteFromId(rootId) as INotePreset).name : ""} ${
    podListPreset.name
  }`;

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        <ColumnManager tablet={["300px", "auto"]}>
          <RootCard />
          <DetailsCard
            podListPreset={podListPreset}
            rootNotePreset={rootNotePreset}
          />
        </ColumnManager>
        {presetType === PresetType.Scale && (
          <RomanNumeralsCard
            podListPreset={podListPreset}
            rootNotePreset={rootNotePreset}
          />
        )}
        {presetType === PresetType.Scale && (
          <ModeCard
            podListPreset={podListPreset}
            rootNotePreset={rootNotePreset}
          />
        )}
        <FretboardCard
          podListPreset={podListPreset}
          rootNotePreset={rootNotePreset}
        />
        <RelatedCard
          podListPreset={podListPreset}
          rootNotePreset={rootNotePreset}
        />
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
