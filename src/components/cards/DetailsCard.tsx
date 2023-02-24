import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  getName as getIntervalName,
  getRatio,
} from "../../core/models/Interval.utils";
import {
  getFrequency,
  getName as getNoteName,
  getOctave,
} from "../../core/models/Note.utils";
import { getNotePods } from "../../core/models/Pod.utils";
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

const getNoteCell = (note: IPod, i: number) => {
  return {
    className: `note featured ${i === 0 ? "root" : ""}`,
    content: (
      <>
        {getNoteName(note)}
        <sub>{getOctave(note)}</sub>
      </>
    ),
  };
};

const getIntervalCell = (interval: IPod, isFeatured) => {
  return (
    <td className={`interval ${isFeatured ? "featured" : ""}`}>
      {getIntervalName(interval)}
    </td>
  );
};

const getPitchCell = (note: IPod) => {
  return <td className={`frequency`}>{getFrequency(note, true)}</td>;
};

const getRatioCell = (interval: IPod) => {
  return <td className={`ratio`}>{getRatio(interval)}</td>;
};

interface IDetailsCardProps {
  modelConfig: IModelConfig;
  rootModelConfig?: IModelConfig;
}

const DetailsCard: React.FC<IDetailsCardProps> = ({
  modelConfig,
  rootModelConfig,
}) => {
  const intervalPods = modelConfig.value;
  const octave = useRecoilValue(octaveState);
  const hasNotes = !!rootModelConfig;
  const notePods =
    hasNotes && getNotePods(rootModelConfig.value, modelConfig.value, octave);

  if (!intervalPods && !notePods) return null;

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
          const notePod = hasNotes && notePods[i];
          return {
            cols: [
              hasNotes ? getNoteCell(notePod, i) : undefined,
              getIntervalCell(ivl, !notePod),
              hasNotes ? getPitchCell(notePod) : undefined,
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
                  ...(notePods as IPod[]).map((note, i) =>
                    getNoteCell(note, i)
                  ),
                ],
              }
            : undefined,
          {
            cols: [
              "Interval",
              ...intervalPods.map((ivl, i) => getIntervalCell(ivl, !notePods)),
            ],
          },
          hasNotes
            ? {
                cols: [
                  "Pitch",
                  ...(notePods as IPod[]).map((note, i) => getPitchCell(note)),
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
