import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../../core/Core.constants";
import { AnyPodListPreset, getPreset } from "../../../../core/Core.derived";
import { INotePreset } from "../../../../core/Note.constants";
import { getRootedName } from "../../../../core/Pod.utils";
import { IScalePreset } from "../../../../core/Scale.constants";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import { ModelPageProps } from "../../shared/utils/PagePropsContext";
import DetailsCard from "./cards/DetailsCard";
import FretboardCard from "./cards/FretboardCard";
import ModeCard from "./cards/ModeCard";
import RelatedCard from "./cards/RelatedCard";
import RomanNumeralsCard from "./cards/RomanNumeralsCard";

const StyledPodlistPage = styled(PageLayout)``;

const PodListPage: React.FC<ModelPageProps> = (props) => {
  const { presetType, presetId, rootId } = props.pageContext;

  const podListPreset = getPreset(presetType, presetId) as AnyPodListPreset;
  const rootNotePreset = getPreset(PresetType.Note, rootId) as INotePreset;

  const title = getRootedName(podListPreset, rootNotePreset);

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        <DetailsCard
          podListPreset={podListPreset}
          rootNotePreset={rootNotePreset}
        />
        {presetType === PresetType.Scale && (
          <RomanNumeralsCard
            podListPreset={podListPreset as IScalePreset}
            rootNotePreset={rootNotePreset}
          />
        )}
        {presetType === PresetType.Scale && (
          <ModeCard
            podListPreset={podListPreset as IScalePreset}
            rootNotePreset={rootNotePreset}
          />
        )}
        <FretboardCard
          podListPreset={podListPreset}
          rootNotePreset={rootNotePreset}
          presetType={presetType}
        />
        <RelatedCard
          podListPreset={podListPreset}
          rootNotePreset={rootNotePreset}
          presetType={presetType}
        />
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
