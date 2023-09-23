import React from "react";
import { css } from "styled-components";
import { IChordPreset } from "../../../../../core/Chord.constants";
import { getNumeralParts } from "../../../../../core/Chord.utils";
import { PresetType } from "../../../../../core/Core.constants";
import { INotePreset, NoteId } from "../../../../../core/Note.constants";
import { getRootedName, getShortName } from "../../../../../core/Pod.utils";
import { getModelRoute } from "../../../../../core/Routing.utils";
import { IScalePreset } from "../../../../../core/Scale.constants";
import { getAllNumerals } from "../../../../../core/Scale.utils";
import Card from "../../../shared/ui/Card";
import { Table } from "../../../shared/ui/Table";

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;

  th {
    //color: ${(props) => props.theme?.brand?.accent};
    &:first-child {
      text-align: right;
    }
    padding: 4px;
  }

  td {
    padding: 4px;
    text-align: center;
    sup {
      font-size: 80%;
    }
  }

  .numeral td {
    font-size: 160%;
    font-family: serif;
  }
`;

interface IRomanNumeralsCardProps {
  podListPreset: IScalePreset;
  rootNotePreset?: INotePreset;
  title?: string;
}

const RomanNumeralsCard: React.FC<IRomanNumeralsCardProps> = ({
  podListPreset,
  rootNotePreset,
  title = "Roman Numerals",
}) => {
  const numerals = getAllNumerals(podListPreset, rootNotePreset) as [INotePreset, IChordPreset][];

  if (!numerals.length || numerals.find((n) => !n || !n[1])) return null;

  return (
    <Card title={title}>
      <Table
        styles={tableStyles}
        headerColIndicies={[0]}
        tbody={[
          {
            className: "numeral",
            cols: [
              "Numeral",
              ...numerals.map(([root, n], i) => {
                const [numeral, symbol] = getNumeralParts(
                  n.presetId,
                  i + 1
                );
                return {
                  content: (
                    <>
                      {numeral}
                      <sup className="symbol">{symbol}</sup>
                    </>
                  ),
                };
              }),
            ],
          },
          {
            cols: ["Degree", ...numerals.map((n, i) => i + 1)],
          },
          {
            cols: [
              "Name",
              ...numerals.map(([root, n], i) => ({
                link: getModelRoute(
                  PresetType.Chord,
                  n.presetId,
                  root ? (root.presetId as NoteId) : undefined
                ),
                content: getShortName(getRootedName(n, rootNotePreset)),
              })),
            ],
          },
        ]}
      />
    </Card>
  );
};

export default RomanNumeralsCard;
