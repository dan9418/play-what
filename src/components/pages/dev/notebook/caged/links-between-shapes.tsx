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
    table.links {
      width: 100%;
      > tbody > tr > td {
        padding: 0 4px;
      }
    }
  }
`;

const Page: React.FC<any> = () => {
  return (
    <StyledCAGEDPage title="CAGED">
      <Card title="Shape Links">
        <div className="scroll">
          <table className="links">
            <thead>
              <th>Diatonic</th>
            </thead>
            <tbody>
              {DIATONIC_ITEMS.map((item, i) => {
                const { model, modelId, rootId, voicingId } = item as any;
                const instance = new model(modelId, {
                  root: Note.fromId(rootId),
                });
                return (
                  <tr key={i}>
                    <td key={modelId}>
                      <h3>{instance.getName()}</h3>
                      <FretTable
                        model={instance}
                        voicing={VOICING_PRESET_MAP.get(voicingId)}
                        fretRange={[0, 24]}
                        showFretNumbers={false}
                        showFretDots={false}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="links">
            <thead>
              <th>Pentatonic</th>
            </thead>
            <tbody>
              {PENTATONIC_ITEMS.map((item, i) => {
                const { model, modelId, rootId, voicingId } = item as any;
                const instance = new model(modelId, {
                  root: Note.fromId(rootId),
                });
                return (
                  <tr key={i}>
                    <td key={modelId}>
                      <h3>{instance.getName()}</h3>
                      <FretTable
                        model={instance}
                        voicing={VOICING_PRESET_MAP.get(voicingId)}
                        fretRange={[0, 24]}
                        showFretNumbers={false}
                        showFretDots={false}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="links">
            <thead>
              <th>Roman Numerals</th>
            </thead>
            <tbody>
              {ROMAN_NUMERAL_ITEMS.map((item, i) => {
                const { model, modelId, rootId, voicingId } = item as any;
                const instance = new model(modelId, {
                  root: Note.fromId(rootId),
                });
                return (
                  <tr key={i}>
                    <td key={modelId}>
                      <h3>{instance.getName()}</h3>
                      <FretTable
                        model={instance}
                        voicing={VOICING_PRESET_MAP.get(voicingId)}
                        fretRange={[0, 24]}
                        showFretNumbers={false}
                        showFretDots={false}
                      />
                    </td>
                  </tr>
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
