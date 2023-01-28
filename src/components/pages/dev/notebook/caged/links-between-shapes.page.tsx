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

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="CAGED Shape Links">
      <Card title="Diatonic">
        <Table tbody={getRows(DIATONIC_ITEMS)} />
      </Card>
      <Card title="Pentatonic">
        <Table tbody={getRows(PENTATONIC_ITEMS)} />
      </Card>
      <Card title="Roman Numerals">
        <Table tbody={getRows(ROMAN_NUMERAL_ITEMS)} />
      </Card>
    </StyledCAGEDPage>
  );
};

export default Page;
