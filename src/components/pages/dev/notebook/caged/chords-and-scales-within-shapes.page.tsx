import React from "react";
import styled from "styled-components";
import Note from "../../../../../core/models/Note";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import FretboardCell from "../../../../ui/FretboardCell";
import SmartCard, { ICardConfig } from "../../../../ui/SmartCard";
import {
  DIATONIC_ITEMS,
  PENTATONIC_ITEMS,
  ROMAN_NUMERAL_ITEMS,
} from "./caged.shared";

const StyledCAGEDPage = styled(PageLayout)``;

const DISPLAY = [
  [
    "Pentatonic",
    PENTATONIC_ITEMS[0],
    PENTATONIC_ITEMS[1],
    PENTATONIC_ITEMS[2],
    PENTATONIC_ITEMS[3],
    PENTATONIC_ITEMS[4],
  ],
  [
    "Diatonic",
    DIATONIC_ITEMS[0],
    DIATONIC_ITEMS[1],
    DIATONIC_ITEMS[2],
    DIATONIC_ITEMS[4],
    DIATONIC_ITEMS[5],
  ],
  [
    "Seventh",
    ROMAN_NUMERAL_ITEMS[0],
    ROMAN_NUMERAL_ITEMS[1],
    ROMAN_NUMERAL_ITEMS[2],
    ROMAN_NUMERAL_ITEMS[4],
    ROMAN_NUMERAL_ITEMS[5],
  ],
];

const FRET_RANGE: [number, number][] = [
  [4, 4 + 4],
  [6, 6 + 4],
  [9, 9 + 4],
  [11, 11 + 4],
  [1, 1 + 4],
];

const HEAD = [{ cols: ["", "C", "A", "G", "E", "D"] }];

const getRows = (rows: any[]) => {
  return rows.map((row, i) => {
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
  });
};

const getCardConfig = (): ICardConfig => {
  return {
    title: "Shape Relationships",
    table: {
      thead: HEAD,
      tbody: getRows(DISPLAY),
      headerColIndicies: [0],
    },
  };
};

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="CAGED Shapes">
      <SmartCard cards={[getCardConfig()]} />
    </StyledCAGEDPage>
  );
};

export default Page;
