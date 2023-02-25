import React from "react";
import styled from "styled-components";
import { CHORD_PRESETS } from "../../../core/models/Chord.constants";
import { Tag } from "../../../core/models/Model.constants";
import CollectionCard from "../../collection/CollectionCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledChordsPage = styled(PageLayout)`
  .intro {
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

const ChordsPage: React.FC = () => {
  return (
    <StyledChordsPage title="Chords" subtitle="The foundation of harmony">
      <div>
        <p className="intro">
          A chord is a collection of musical notes, usually played
          simultaneously. Chords are defined by their first note (the&nbsp;
          <em>root</em>) and its relationship to the following notes (
          <em>intervals</em>).
        </p>
      </div>
      <ColumnManager>
        <CollectionCard
          title="Triads"
          description={`
            A triad is the most basic type of chord. It consists of 3
            intervals (a root, a third, and a fifth). The specific thirds and
            fifths used determine the type (or quality) of the triad.
          `}
          data={CHORD_PRESETS.filter((chord) => chord.tags.includes(Tag.Triad))}
        />
        <CollectionCard
          title="Seventh Chords"
          description={`
            A seventh chord is a triad with an additional seventh interval
            stacked on top.
          `}
          data={CHORD_PRESETS.filter(
            (chord) =>
              chord.tags.includes(Tag.Seventh) &&
              !chord.tags.includes(Tag.Extended)
          )}
        />
        <CollectionCard
          title="Sixth Chords"
          description={`
            A sixth chord is a triad with an additional sixth interval stacked
            on top. They are similar in function to seventh chords.
          `}
          data={CHORD_PRESETS.filter(
            (chord) =>
              chord.tags.includes(Tag.Sixth) &&
              !chord.tags.includes(Tag.Extended)
          )}
        />
        <CollectionCard
          title="Suspended Chords"
          description={`
            A suspended chord is a like a triad, except it sustitutes a second
            or fourth interval in place of the third.
          `}
          data={CHORD_PRESETS.filter((chord) =>
            chord.tags.includes(Tag.Suspended)
          )}
        />
        <CollectionCard
          title="Extended Chords"
          description={`
            An extended chord contains extended intervals. [INCOMPLETE]
          `}
          data={CHORD_PRESETS.filter((chord) =>
            chord.tags.includes(Tag.Extended)
          )}
        />
        {/* Altered Chords */}
      </ColumnManager>
    </StyledChordsPage>
  );
};

export default ChordsPage;
