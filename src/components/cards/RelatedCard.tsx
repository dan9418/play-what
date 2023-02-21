import React from "react";
import { IModelConfig, PresetType } from "../../core/models/Model.constants";
import { CHORD_PRESETS, SCALE_PRESETS } from "../../core/models/Model.presets";
import {
  getSubchords,
  getSubscales,
  getSuperchords,
  getSuperscales,
} from "../../core/models/Pod.static";
import CollectionList from "../collection/CollectionList";
import CollectionTable from "../collection/CollectionTable";
import Card from "../ui/Card";

interface IRelatedCardProps {
  modelConfig: IModelConfig;
  rootModelConfig?: IModelConfig;
}

const RelatedCard: React.FC<IRelatedCardProps> = ({
  modelConfig,
  rootModelConfig,
}) => {
  const { modelType, presetType, presetId, value: intervalPods } = modelConfig;
  const subchords = getSubchords(intervalPods);
  const subscales = getSubscales(intervalPods);
  const superchords = getSuperchords(intervalPods);
  const superscales = getSuperscales(intervalPods);

  const semitones = intervalPods.map((ivl) => ivl[0] + 1);

  return (
    <>
      {subchords.length > 0 && (
        <Card title="Child Chords">
          <CollectionTable
            data={subchords}
            rootModelConfig={rootModelConfig}
            semitones={semitones}
          />
        </Card>
      )}
      {superchords.length > 0 && (
        <Card title="Parent Chords">
          <CollectionTable
            data={superchords}
            rootModelConfig={rootModelConfig}
            semitones={semitones}
          />
        </Card>
      )}
      {subscales.length > 0 && (
        <Card title="Child Scales">
          <CollectionTable
            data={subscales}
            rootModelConfig={rootModelConfig}
            semitones={semitones}
          />
        </Card>
      )}
      {superscales.length > 0 && (
        <Card title="Parent Scales">
          <CollectionTable
            data={superscales}
            rootModelConfig={rootModelConfig}
            semitones={semitones}
          />
        </Card>
      )}
      {presetType === PresetType.Chord && (
        <Card title="Other Chords">
          <CollectionList data={CHORD_PRESETS} />
        </Card>
      )}
      {presetType === PresetType.Scale && (
        <Card title="Other Scales">
          <CollectionList data={SCALE_PRESETS} />
        </Card>
      )}
    </>
  );
};

export default RelatedCard;
