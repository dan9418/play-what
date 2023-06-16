import React from "react";
import { CHORD_PRESETS } from "../../../../../core/Chord.constants";
import { PresetType } from "../../../../../core/Core.constants";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import { INotePreset } from "../../../../../core/Note.constants";
import {
  getSubchords,
  getSubscales,
  getSuperchords,
  getSuperscales,
} from "../../../../../core/Pod.utils";
import { SCALE_PRESETS } from "../../../../../core/Scale.constants";
import Card from "../../../shared/ui/Card";
import CollectionList from "./CollectionList";
import CollectionTable from "./CollectionTable";

interface IRelatedCardProps {
  podListPreset: AnyPodListPreset;
  rootNotePreset?: INotePreset;
  presetType: PresetType;
}

const RelatedCard: React.FC<IRelatedCardProps> = ({
  podListPreset,
  rootNotePreset,
  presetType,
}) => {
  const { pods, presetId } = podListPreset;
  const subchords = getSubchords(pods);
  const subscales = getSubscales(pods);
  const superchords = getSuperchords(pods);
  const superscales = getSuperscales(pods);

  const semitones = pods.map((ivl) => ivl[0] + 1);
  return (
    <>
      {subchords.length > 0 && (
        <Card title="Child Chords">
          <CollectionTable
            data={subchords}
            rootNotePreset={rootNotePreset}
            semitones={semitones}
            presetType={presetType}
          />
        </Card>
      )}
      {superchords.length > 0 && (
        <Card title="Parent Chords">
          <CollectionTable
            data={superchords}
            rootNotePreset={rootNotePreset}
            semitones={semitones}
            presetType={presetType}
          />
        </Card>
      )}
      {subscales.length > 0 && (
        <Card title="Child Scales">
          <CollectionTable
            data={subscales}
            rootNotePreset={rootNotePreset}
            semitones={semitones}
            presetType={presetType}
          />
        </Card>
      )}
      {superscales.length > 0 && (
        <Card title="Parent Scales">
          <CollectionTable
            data={superscales}
            rootNotePreset={rootNotePreset}
            semitones={semitones}
            presetType={presetType}
          />
        </Card>
      )}
      {presetType === PresetType.Chord && (
        <Card title="Other Chords">
          <CollectionList
            data={CHORD_PRESETS.filter(
              (preset) => preset.presetId !== presetId
            )}
          />
        </Card>
      )}
      {presetType === PresetType.Scale && (
        <Card title="Other Scales">
          <CollectionList
            data={SCALE_PRESETS.filter(
              (preset) => preset.presetId !== presetId
            )}
          />
        </Card>
      )}
    </>
  );
};

export default RelatedCard;
