import React from "react";
import styled from "styled-components";
import { ModelPageProps } from "../../../contexts/PagePropsContext";
import { IModelConfig, PresetType } from "../../../core/models/Model.constants";
import { getNoteFromId } from "../../../core/models/Note.utils";
import { getModelConfigById } from "../../../core/models/Pod.static";
import DetailsCard from "../../cards/DetailsCard";
import RelatedCard from "../../cards/RelatedCard";
import RomanNumeralsCard from "../../cards/RomanNumeralsCard";
import RootCard from "../../cards/RootCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledPodlistPage = styled(PageLayout)``;

const PodListPage: React.FC<ModelPageProps> = (props) => {
  const { presetType, presetId, rootId } = props.pageContext;

  const modelConfig = getModelConfigById(presetType, presetId) as IModelConfig;
  const rootModelConfig = getNoteFromId(rootId);

  const title = `${
    rootId ? (getNoteFromId(rootId) as IModelConfig).name : ""
  } ${modelConfig.name}`;

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
        {
          presetType === PresetType.Scale &&
            null /*<ModeCard model={podList} />*/
        }
        {/*<GuitarCard model={podList} />*/}
        <RelatedCard
          modelConfig={modelConfig}
          rootModelConfig={rootModelConfig}
        />
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
