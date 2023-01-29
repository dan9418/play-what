import React from "react";
import styled from "styled-components";
import Note from "../../../../../core/models/Note";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import { StyledCard } from "../../../../ui/Card";
import FretboardCell from "../../../../ui/FretboardCell";
import SmartCard from "../../../../ui/SmartCard";
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

const getRows = (items: any[]) => {
  return items.map((item, i) => {
    const { model, modelId, rootId, voicingId } = item as any;
    const instance = new model(modelId, {
      root: Note.fromId(rootId),
    });
    const voicing = VOICING_PRESET_MAP.get(voicingId);
    const fretRange = [4, 19] as [number, number];
    return {
      cols: [
        {
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
        },
      ],
    };
  });
};

const CARD_CONFIGS = [
  {
    title: "Diatonic",
    table: { tbody: getRows(DIATONIC_ITEMS) },
  },
  {
    title: "Pentatonic",
    table: { tbody: getRows(PENTATONIC_ITEMS) },
  },
  {
    title: "Roman Numerals",
    table: { tbody: getRows(ROMAN_NUMERAL_ITEMS) },
  },
];

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="CAGED Shape Links">
      <SmartCard cards={CARD_CONFIGS} />
    </StyledCAGEDPage>
  );
};

export default Page;
