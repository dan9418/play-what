import React from "react";
import { css } from "styled-components";
import { ChordId, IChordPreset } from "../../core/models/Chord.presets";
import { getNumeralParts } from "../../core/models/Chord.utils";
import { INotePreset, NoteId } from "../../core/models/Note.presets";
import { getRootedName, getShortName } from "../../core/models/Pod.utils";
import { IPodListPreset } from "../../core/models/PodList.presets";
import { IScalePreset } from "../../core/models/Scale.presets";
import { getAllNumerals } from "../../core/models/Scale.utils";
import { getModelRoute } from "../../core/routing/Routing.utils";
import Card from "../ui/Card";
import { Table } from "../ui/Table";

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;

  th {
    //color: ${(props) => props.theme.brand.accent};
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
  modelConfig: IChordPreset | IScalePreset;
  rootModelConfig?: INotePreset;
  title?: string;
}

const RomanNumeralsCard: React.FC<IRomanNumeralsCardProps> = ({
  modelConfig,
  rootModelConfig,
  title = "Roman Numerals",
}) => {
  const numerals = getAllNumerals(modelConfig, rootModelConfig);

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
                  n.presetId as ChordId,
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
                  n.presetType,
                  n.presetId,
                  root ? (root.presetId as NoteId) : undefined
                ),
                content: getShortName(getRootedName(n, rootModelConfig)),
              })),
            ],
          },
        ]}
      />
    </Card>
  );
};

export default RomanNumeralsCard;
