import React from "react";
import { ModelType } from "../../core/models/Model.constants";
import { CHORD_PRESETS, SCALE_PRESETS } from "../../core/models/Model.presets";
import CollectionList from "../collection/CollectionList";
import CollectionTable from "../collection/CollectionTable";
import Card from "../ui/Card";

const RelatedCard: React.FC<any> = ({ model }) => {
  const subchords = model.getSubchords();
  const subscales = model.getSubscales();
  const superchords = model.getSuperchords();
  const superscales = model.getSuperscales();

  const semitones = model.intervals.map((ivl) => ivl.pod[0] + 1);

  return (
    <>
      {subchords.length > 0 && (
        <Card title="Child Chords">
          <CollectionTable data={subchords} semitones={semitones} />
        </Card>
      )}
      {superchords.length > 0 && (
        <Card title="Parent Chords">
          <CollectionTable data={superchords} semitones={semitones} />
        </Card>
      )}
      {subscales.length > 0 && (
        <Card title="Child Scales">
          <CollectionTable data={subscales} semitones={semitones} />
        </Card>
      )}
      {superscales.length > 0 && (
        <Card title="Parent Scales">
          <CollectionTable data={superscales} semitones={semitones} />
        </Card>
      )}
      {model.modelType === ModelType.Chord && (
        <Card title="Other Chords">
          <CollectionList data={CHORD_PRESETS} />
        </Card>
      )}
      {model.modelType === ModelType.Scale && (
        <Card title="Other Scales">
          <CollectionList data={SCALE_PRESETS} />
        </Card>
      )}
    </>
  );
};

export default RelatedCard;
