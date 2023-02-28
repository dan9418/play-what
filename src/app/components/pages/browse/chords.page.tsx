import React from "react";
import { CHORD_PRESETS } from "../../../../core/Chord.constants";
import { PresetType, Tag } from "../../../../core/Core.constants";
import CollectionPage, { ICollectionPageCard } from "./CollectionPage";

const CARDS: ICollectionPageCard[] = [
  {
    title: "Diatonic Modes",
    description: `
      A triad is the most basic type of chord. It consists of 3
      intervals (a root, a third, and a fifth). The specific thirds and
      fifths used determine the type (or quality) of the triad.
    `,
    data: CHORD_PRESETS.filter((chord) => chord.tags.includes(Tag.Triad)),
  },
  {
    title: "Seventh Chords",
    description: `
      A seventh chord is a triad with an additional seventh interval
      stacked on top.
    `,
    data: CHORD_PRESETS.filter(
      (chord) =>
        chord.tags.includes(Tag.Seventh) && !chord.tags.includes(Tag.Extended)
    ),
  },
  {
    title: "Sixth Chords",
    description: `
      A sixth chord is a triad with an additional sixth interval stacked
      on top. They are similar in function to seventh chords.
    `,
    data: CHORD_PRESETS.filter(
      (chord) =>
        chord.tags.includes(Tag.Sixth) && !chord.tags.includes(Tag.Extended)
    ),
  },
  {
    title: "Suspended Chords",
    description: `
      A suspended chord is a like a triad, except it sustitutes a second
      or fourth interval in place of the third.
    `,
    data: CHORD_PRESETS.filter((chord) => chord.tags.includes(Tag.Suspended)),
  },
  {
    title: "Extended Chords",
    description: `
      An extended chord contains extended intervals. [INCOMPLETE]
    `,
    data: CHORD_PRESETS.filter((chord) => chord.tags.includes(Tag.Extended)),
  },
];

const ChordsPage: React.FC = () => {
  return (
    <CollectionPage
      presetType={PresetType.Chord}
      title="Chords"
      subtitle="The foundation of harmony"
      intro={`A chord is a collection of musical notes, usually played
        simultaneously. Chords are defined by their first note (the
        root) and its relationship to the following notes (
        intervals).`}
      cards={CARDS}
    />
  );
};

export default ChordsPage;
