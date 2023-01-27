import React from "react";
import styled from "styled-components";
import Note from "../../../../../core/models/Note";
import FretTable from "../../../../../viewers/fret-table/FretTable";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../ui/Card";
import { Table } from "../../../../ui/Table";
import {
  DIATONIC_ITEMS,
  PENTATONIC_ITEMS,
  ROMAN_NUMERAL_ITEMS,
} from "./caged.shared";

const StyledCAGEDPage = styled(PageLayout)`
  .scroll {
    overflow-x: auto;
  }

  ${StyledCard} {
    margin-top: 16px;
    table.shapes {
      width: 100%;
      > tbody > tr > td {
        width: 256px;
        padding: 0 4px;

        h3 {
          font-size: 14px;
        }
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
  [1, 5],
  [4, 7 + 1],
  [6, 10],
  [9, 12 + 1],
  [11, 14 + 1],
];

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="CAGED">
      <Card title="Shape Comparisons">
        <div className="scroll">
          <Table
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
                  console.log("dpb", fretRange);
                  return {
                    content: (
                      <>
                        <h3>{instance.getName()}</h3>
                        <FretTable
                          model={instance}
                          voicing={voicing}
                          fretRange={fretRange}
                          showFretNumbers={false}
                          showFretDots={false}
                        />
                      </>
                    ),
                  };
                }),
              };
            })}
            headerColIndicies={[0]}
            className="shapes"
          />
        </div>
      </Card>
    </StyledCAGEDPage>
  );
};

export default Page;
