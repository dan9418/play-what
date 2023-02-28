import React from "react";
import { PresetType, Tag } from "../../../../core/Core.constants";
import { SCALE_PRESETS } from "../../../../core/Scale.constants";
import CollectionPage, { ICollectionPageCard } from "./CollectionPage";

const CARDS: ICollectionPageCard[] = [
  {
    title: "Diatonic Modes",
    description: `
      Diatonic scales are by far the most common type in Western music.
      They are defined by a specific sequence of seven intervals
      containing five whole-steps and two half-steps. The most common
      form of the diatonic scale is the Major scale (AKA the Ionian
      mode), which follows the pattern W-W-W-H-W-W-H.
    `,
    data: SCALE_PRESETS.filter((scale) => scale.tags.includes(Tag.Diatonic)),
  },
  {
    title: "Harmonic Minor Modes",
    description: `The Harmonic Minor scale is a slight variation of the Natural
    Minor scale (which itself is just a mode of the Diatonic scale).
    The only difference is that the seventh degree is raised a
    half-step, creating a Major 7th interval instead of a Minor 7th.
    This slight variation to the diatonic scale creates seven more
    unique modes.`,
    data: SCALE_PRESETS.filter((scale) =>
      scale.tags.includes(Tag.HarmonicMode)
    ),
  },
  {
    title: "Melodic Minor Modes",
    description: `The Melodic Minor scale is formed by making one additional change
    to the Harmonic Minor scale. We simply raise the sixth degree by a
    half-step, creating a Major 6th interval instead of a Major 7th.
    This variation also creates seven unique modes.`,
    data: SCALE_PRESETS.filter((scale) => scale.tags.includes(Tag.MelodicMode)),
  },
  {
    title: "Pentatonic Modes",
    description: `Pentatonic scales contain only five notes and are often a subset
    of diatonic scales. For example, the Major Pentatonic scale is the
    same as a Major Diatonic scale without the 4th and 7th degrees.`,
    data: SCALE_PRESETS.filter((scale) => scale.tags.includes(Tag.Pentatonic)),
  },
  {
    title: "Blues Scales",
    description: `Blues scales are pentatonic scales with an extra "blue" note.`,
    data: SCALE_PRESETS.filter((scale) => scale.tags.includes(Tag.Blues)),
  },
  {
    title: "Bebob Scales",
    description: `Bebop scales are diatonic scales with an extra chomatic passing note.`,
    data: SCALE_PRESETS.filter((scale) => scale.tags.includes(Tag.Bebop)),
  },
];

const ScalesPage: React.FC = () => {
  return (
    <CollectionPage
      presetType={PresetType.Scale}
      title="Scales"
      subtitle="The foundation of melody"
      intro={`A scale is a collection of musical notes, which are generally played
          sequentially and ordered by pitch. Scales are defined by their first
          note (the root) and its relationship to the following notes (intervals).
          In their most common form, scales contain seven notes spanning a
          single octave. These seven degrees are lettered A-G.
          Additionally, a mode is simply a rotation of any given`}
      cards={CARDS}
    />
  );
};

export default ScalesPage;
