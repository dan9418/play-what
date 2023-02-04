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
  TRIAD_ITEMS,
} from "./caged.shared";

const StyledCAGEDPage = styled(PageLayout)``;

const DISPLAY = [
  [
    "Pentatonic",

    PENTATONIC_ITEMS[2],
    PENTATONIC_ITEMS[3],
    PENTATONIC_ITEMS[4],
    PENTATONIC_ITEMS[0],
    PENTATONIC_ITEMS[1],
  ],
  [
    "Diatonic",

    DIATONIC_ITEMS[2],
    DIATONIC_ITEMS[4],
    DIATONIC_ITEMS[5],
    DIATONIC_ITEMS[0],
    DIATONIC_ITEMS[1],
  ],
  [
    "Seventh",

    ROMAN_NUMERAL_ITEMS[2],
    ROMAN_NUMERAL_ITEMS[4],
    ROMAN_NUMERAL_ITEMS[5],
    ROMAN_NUMERAL_ITEMS[0],
    ROMAN_NUMERAL_ITEMS[1],
  ],
  [
    "Triad",

    TRIAD_ITEMS[2],
    TRIAD_ITEMS[4],
    TRIAD_ITEMS[5],
    TRIAD_ITEMS[0],
    TRIAD_ITEMS[1],
  ],
];

const ROOT_FRET = 7;
const STARTING_FRET: number[] = [
  ROOT_FRET + 5,
  ROOT_FRET + 7,
  ROOT_FRET + 9,
  ROOT_FRET,
  ROOT_FRET + 2,
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
        const startingFret = STARTING_FRET[j - 1];
        const fretRange: [number, number] = [startingFret, startingFret + 4];
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
    title: "",
    table: {
      thead: HEAD,
      tbody: getRows(DISPLAY),
      headerColIndicies: [0],
    },
  };
};

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="Connecting Shapes">
      <SmartCard cards={[getCardConfig()]} />
    </StyledCAGEDPage>
  );
};

export default Page;
