import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import NumberUtils from "../../core/general/Number.utils";
import { getName, getRatio } from "../../core/models/Interval.utils";
import { IPod } from "../../core/models/Model.constants";
import Note from "../../core/models/Note";
import PodList from "../../core/models/PodList";
import { octaveState } from "../../state/state";
import { CardHeader, StyledCard } from "../ui/Card";
import { Table } from "../ui/Table";

const StyledDetailsCard = styled(StyledCard)<{ $n: number }>`
  .header {
    display: none;
    @media (min-width: 512px) {
      display: unset;
    }
  }
  table {
    margin: auto;
    border-collapse: collapse;

    &.mobile {
      display: table;
      @media (min-width: 512px) {
        display: none;
      }
    }
    &.desktop {
      display: none;
      @media (min-width: 512px) {
        display: table;
      }
      th {
        display: none;
      }
    }

    td,
    th {
      padding: 4px;
      @media (min-width: 512px) {
        padding: 4px 8px;
      }
      text-align: center;
    }

    th {
      text-transform: uppercase;
      font-size: 80%;
    }

    .featured {
      font-weight: bold;
      font-size: 150%;
      @media (min-width: 512px) {
        font-size: 200%;
      }
    }

    .interval {
      font-size: 120%;
      @media (min-width: 512px) {
        font-size: 150%;
      }
    }

    .ratio,
    .frequency {
      color: ${(props) => props.theme.text.secondary};
      font-size: 80%;
      @media (min-width: 512px) {
        font-size: 100%;
      }
    }

    .root {
      color: red;
    }
  }
`;

const getNoteCell = (note, i) => {
  return {
    className: `note featured ${i === 0 ? "root" : ""}`,
    content: (
      <>
        {note.name}
        <sub>{note.getOctave()}</sub>
      </>
    ),
  };
};

const getIntervalCell = (interval: IPod, isFeatured) => {
  return (
    <td className={`interval ${isFeatured ? "featured" : ""}`}>
      {getName(interval)}
    </td>
  );
};

const getPitchCell = (note) => {
  return <td className={`frequency`}>{note.getFrequency(true)}</td>;
};

const getRatioCell = (interval: IPod) => {
  return <td className={`ratio`}>{getRatio(interval)}</td>;
};

interface IDetailsCardProps {
  model: PodList;
}

const DetailsCard: React.FC<IDetailsCardProps> = ({ model }) => {
  const intervalPods = model.intervalPods;
  const octave = useRecoilValue(octaveState);
  const hasNotes = !!model.notes;
  const notes =
    hasNotes &&
    (model.notes as Note[]).map(
      (n) =>
        new Note([
          (octave - 4) * 12 + NumberUtils.modulo(n.pod[0], 12),
          n.pod[1],
        ])
    );

  if (!intervalPods && !notes) return null;

  return (
    <StyledDetailsCard $n={intervalPods.length}>
      <CardHeader title={hasNotes ? "Notes" : "Intervals"} />
      <Table
        className="mobile"
        thead={[
          {
            cols: [
              hasNotes ? "Note" : undefined,
              "Interval",
              hasNotes ? "Pitch" : undefined,
              "Ratio",
            ],
          },
        ]}
        tbody={intervalPods.map((ivl, i) => {
          const note = hasNotes && notes[i];
          return {
            cols: [
              hasNotes ? getNoteCell(note, i) : undefined,
              getIntervalCell(ivl, !note),
              hasNotes ? getPitchCell(note) : undefined,
              getRatioCell(ivl),
            ],
          };
        })}
      />
      <Table
        className="desktop"
        headerColIndicies={[0]}
        tbody={[
          hasNotes
            ? {
                cols: [
                  "Note",
                  ...(notes as Note[]).map((note, i) => getNoteCell(note, i)),
                ],
              }
            : undefined,
          {
            cols: [
              "Interval",
              ...intervalPods.map((ivl, i) => getIntervalCell(ivl, !notes)),
            ],
          },
          hasNotes
            ? {
                cols: [
                  "Pitch",
                  ...(notes as Note[]).map((note, i) => getPitchCell(note)),
                ],
              }
            : undefined,
          {
            cols: ["Ratio", ...intervalPods.map((ivl, i) => getRatioCell(ivl))],
          },
        ]}
      />
    </StyledDetailsCard>
  );
};

export default DetailsCard;
