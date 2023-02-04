import React from "react";
import styled from "styled-components";
import Note from "../../../../../core/models/Note";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import { StyledCard } from "../../../../ui/Card";
import FretboardCell from "../../../../ui/FretboardCell";
import SmartCard, { ICardConfig } from "../../../../ui/SmartCard";
import {
  CAGED_ITEMS,
  DIATONIC_ITEMS,
  PENTATONIC_ITEMS,
  ROMAN_NUMERAL_ITEMS,
} from "./caged.shared";

const StyledCAGEDPage = styled(PageLayout)``;

const HEAD = [{ cols: ["C", "A", "G", "E", "D"] }];

const getRows = (rows: any[]) => {
  return rows.map((row, i) => {
    return {
      cols: row.map((col, j) => {
        const { model, modelId, rootId, voicingId } = col as any;
        const instance = new model(modelId, {
          root: Note.fromId(rootId),
        });
        const voicing = VOICING_PRESET_MAP.get(voicingId);
        const startingFret = 0;
        const fretRange: [number, number] = [startingFret, startingFret + 12];
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
      tbody: getRows([CAGED_ITEMS]),
      headerColIndicies: [0],
    },
  };
};

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="The CAGED System">
      <SmartCard cards={[getCardConfig()]} />
    </StyledCAGEDPage>
  );
};

export default Page;
