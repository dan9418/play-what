import React from "react";
import styled from "styled-components";
import { Tag } from "../../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../../core/models/Scale.constants";
import CollectionCard from "../../collection/CollectionCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledScalesPage = styled(PageLayout)`
  .intro {
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

const ScalesPage: React.FC = () => {
  return (
    <StyledScalesPage title="Scales" subtitle="The foundation of melody">
      <div>
        <p className="intro">
          A scale is a collection of musical notes, which are generally played
          sequentially and ordered by pitch. Scales are defined by their first
          note (the <em>root</em>) and its relationship to the following notes (
          <em>intervals</em>).
        </p>
        <p className="intro">
          In their most common form, scales contain seven notes spanning a
          single octave. These seven <em>degrees</em> are lettered A-G.
          Additionally, a&nbsp;<em>mode</em> is simply a rotation of any given
          scale.
        </p>
      </div>
      <ColumnManager>
        <ColumnManager>
          <CollectionCard
            title="Diatonic Modes"
            description={`
              Diatonic scales are by far the most common type in Western music.
              They are defined by a specific sequence of seven intervals
              containing five whole-steps and two half-steps. The most common
              form of the diatonic scale is the Major scale (AKA the Ionian
              mode), which follows the pattern W-W-W-H-W-W-H.
            `}
            data={SCALE_PRESETS.filter((scale) =>
              scale.tags.includes(Tag.Diatonic)
            )}
          />
          <CollectionCard
            title="Harmonic Minor Modes"
            description={`
              The Harmonic Minor scale is a slight variation of the Natural
              Minor scale (which itself is just a mode of the Diatonic scale).
              The only difference is that the seventh degree is raised a
              half-step, creating a Major 7th interval instead of a Minor 7th.
              This slight variation to the diatonic scale creates seven more
              unique modes.
            `}
            data={SCALE_PRESETS.filter((scale) =>
              scale.tags.includes(Tag.HarmonicMode)
            )}
          />
          <CollectionCard
            title="Melodic Minor Modes"
            description={`
              The Melodic Minor scale is formed by making one additional change
              to the Harmonic Minor scale. We simply raise the sixth degree by a
              half-step, creating a Major 6th interval instead of a Major 7th.
              This variation also creates seven unique modes.
            `}
            data={SCALE_PRESETS.filter((scale) =>
              scale.tags.includes(Tag.MelodicMode)
            )}
          />
          <CollectionCard
            title="Pentatonic Modes"
            description={`
              Pentatonic scales contain only five notes and are often a subset
              of diatonic scales. For example, the Major Pentatonic scale is the
              same as a Major Diatonic scale without the 4th and 7th degrees.
            `}
            data={SCALE_PRESETS.filter((scale) =>
              scale.tags.includes(Tag.Pentatonic)
            )}
          />
          <CollectionCard
            title="Blues Scales"
            description={`
              Blues scales are pentatonic scales with an extra "blue" note.
            `}
            data={SCALE_PRESETS.filter((scale) =>
              scale.tags.includes(Tag.Blues)
            )}
          />
          <CollectionCard
            title="Bebop Scales"
            description={`
              Bebop scales are diatonic scales with an extra chomatic passing note.
            `}
            data={SCALE_PRESETS.filter((scale) =>
              scale.tags.includes(Tag.Bebop)
            )}
          />
        </ColumnManager>
      </ColumnManager>
    </StyledScalesPage>
  );
};

export default ScalesPage;
