import React from "react";
import { PresetType } from "../../core/models/Model.constants";
import { NoteId } from "../../core/models/Note.constants";
import { IPodPreset } from "../../core/models/Pod.constants";
import {
  getSubchords,
  getSubscales,
  getSuperchords,
  getSuperscales,
} from "../../core/models/Pod.utils";
import { IPodListPreset } from "../../core/models/PodList.constants";
import CollectionList from "../collection/CollectionList";
import CollectionTable from "../collection/CollectionTable";
import Card from "../ui/Card";

interface IRelatedCardProps {
  podListPreset: IPodListPreset<any>;
  rootNotePreset?: IPodPreset<NoteId>;
  presetType: PresetType;
}

const RelatedCard: React.FC<IRelatedCardProps> = ({
  podListPreset,
  rootNotePreset,
  presetType,
}) => {
  const { value: intervalPods } = podListPreset;
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
            rootNotePreset={rootNotePreset}
            semitones={semitones}
          />
        </Card>
      )}
      {superchords.length > 0 && (
        <Card title="Parent Chords">
          <CollectionTable
            data={superchords}
            rootNotePreset={rootNotePreset}
            semitones={semitones}
          />
        </Card>
      )}
      {subscales.length > 0 && (
        <Card title="Child Scales">
          <CollectionTable
            data={subscales}
            rootNotePreset={rootNotePreset}
            semitones={semitones}
          />
        </Card>
      )}
      {superscales.length > 0 && (
        <Card title="Parent Scales">
          <CollectionTable
            data={superscales}
            rootNotePreset={rootNotePreset}
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
