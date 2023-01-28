import React from "react";
import styled from "styled-components";
import Note from "../../../../../core/models/Note";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../ui/Card";
import FretboardCell from "../../../../ui/FretboardCell";
import { Table } from "../../../../ui/Table";
import {
  DIATONIC_ITEMS,
  PENTATONIC_ITEMS,
  ROMAN_NUMERAL_ITEMS,
} from "./caged.shared";

const StyledCAGEDPage = styled(PageLayout)`
  overflow-x: scroll;
  min-width: 1024px;
  ${StyledCard} {
    margin-top: 16px;
    > table {
      table-layout: fixed;
      width: 100%;
      > tbody > tr > td {
        vertical-align: top;
      }
    }
  }
`;

const DISPLAY = [
  [
    "Pentatonic",
    PENTATONIC_ITEMS[4],
    PENTATONIC_ITEMS[0],
    PENTATONIC_ITEMS[1],
    PENTATONIC_ITEMS[2],
    PENTATONIC_ITEMS[3],
  ],
  [
    "Diatonic",
    DIATONIC_ITEMS[5],
    DIATONIC_ITEMS[0],
    DIATONIC_ITEMS[1],
    DIATONIC_ITEMS[2],
    DIATONIC_ITEMS[4],
  ],
  [
    "Seventh",
    ROMAN_NUMERAL_ITEMS[5],
    ROMAN_NUMERAL_ITEMS[0],
    ROMAN_NUMERAL_ITEMS[1],
    ROMAN_NUMERAL_ITEMS[2],
    ROMAN_NUMERAL_ITEMS[4],
  ],
];

const FRET_RANGE: [number, number][] = [
  [1, 1 + 4],
  [4, 4 + 4],
  [6, 6 + 4],
  [9, 9 + 4],
  [11, 11 + 4],
];

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="CAGED Shapes">
      <Card title="Shape Relationships">
        <Table
          thead={[{ cols: ["", "G", "E", "D", "C", "A"] }]}
          tbody={DISPLAY.map((row, i) => {
            return {
              cols: row.map((col, j) => {
                if (j === 0) return col;
                const { model, modelId, rootId, voicingId } = col as any;
                const instance = new model(modelId, {
                  root: Note.fromId(rootId),
                });
                const voicing = VOICING_PRESET_MAP.get(voicingId);
                const fretRange = FRET_RANGE[j - 1];
                return {
                  content: (
                    <FretboardCell
                      caption={instance.getName()}
                      fretboardConfig={{
                        model: instance,
                        voicing,
                        fretRange,
                        showFretNumbers: false,
                        showFretDots: false,
                      }}
                    />
                  ),
                };
              }),
            };
          })}
          headerColIndicies={[0]}
        />
      </Card>
    </StyledCAGEDPage>
  );
};

export default Page;
