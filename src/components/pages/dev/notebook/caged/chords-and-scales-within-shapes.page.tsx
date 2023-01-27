import React from "react";
import styled from "styled-components";
import Note from "../../../../../core/models/Note";
import FretTable from "../../../../../viewers/fret-table/FretTable";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../ui/Card";
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
    PENTATONIC_ITEMS[4],
    PENTATONIC_ITEMS[0],
    PENTATONIC_ITEMS[1],
    PENTATONIC_ITEMS[2],
    PENTATONIC_ITEMS[3],
  ],
  [
    DIATONIC_ITEMS[5],
    DIATONIC_ITEMS[0],
    DIATONIC_ITEMS[1],
    DIATONIC_ITEMS[2],
    DIATONIC_ITEMS[4],
  ],
  [
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

const Page: React.FC<any> = () => {
  return (
    <StyledCAGEDPage title="CAGED">
      <Card title="Shape Comparisons">
        <div className="scroll">
          <table className="shapes">
            <thead></thead>
            <tbody>
              {DISPLAY.map((item, i) => {
                return (
                  <>
                    <tr key={i}>
                      {i === 0 && <th>Pentatonic</th>}
                      {i === 1 && <th>Diatonic</th>}
                      {i === 2 && <th>Seventh</th>}
                      {item.map((item, j) => {
                        const { model, modelId, rootId, voicingId } =
                          item as any;
                        const instance = new model(modelId, {
                          root: Note.fromId(rootId),
                        });
                        return (
                          <td key={modelId}>
                            <h3>{instance.getName()}</h3>
                            <FretTable
                              model={instance}
                              voicing={VOICING_PRESET_MAP.get(voicingId)}
                              fretRange={FRET_RANGE[j]}
                              showFretNumbers={false}
                              showFretDots={false}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </StyledCAGEDPage>
  );
};

export default Page;
