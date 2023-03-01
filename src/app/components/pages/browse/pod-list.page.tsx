import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../../core/Core.constants";
import { AnyPodListPreset, getPreset } from "../../../../core/Core.derived";
import { INotePreset } from "../../../../core/Note.constants";
import { getRootedName } from "../../../../core/Pod.utils";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import { ModelPageProps } from "../../shared/utils/PagePropsContext";
import RelatedCard from "./cards/RelatedCard";

const StyledPodlistPage = styled(PageLayout)``;

const PodListPage: React.FC<ModelPageProps> = (props) => {
  const { presetType, presetId, rootId } = props.pageContext;

  const podListPreset = getPreset(presetType, presetId) as AnyPodListPreset;
  const rootNotePreset = getPreset(PresetType.Note, rootId) as INotePreset;

  const title = getRootedName(podListPreset, rootNotePreset);

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        {/*<ColumnManager tablet={["300px", "auto"]}>
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
        />*/}
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
