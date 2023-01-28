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
    table.links {
      width: 100%;
      > tbody > tr > td {
        padding: 0 4px;
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
    return {
      cols: [
        {
          content: (
            <>
              <h3>{instance.getName()}</h3>
              <FretTable
                model={instance}
                voicing={VOICING_PRESET_MAP.get(voicingId)}
                fretRange={[4, 19]}
                showFretNumbers={false}
                showFretDots={false}
              />
            </>
          ),
        },
      ],
    };
  });
};

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="CAGED">
      <Card title="Shape Links">
        <div className="scroll">
          <Table
            className="links"
            thead={[{ cols: ["Diatonic"] }]}
            tbody={getRows(DIATONIC_ITEMS)}
          />
          <Table
            className="links"
            thead={[{ cols: ["Pentatonic"] }]}
            tbody={getRows(PENTATONIC_ITEMS)}
          />
          <Table
            className="links"
            thead={[{ cols: ["Roman Numerals"] }]}
            tbody={getRows(ROMAN_NUMERAL_ITEMS)}
          />
        </div>
      </Card>
    </StyledCAGEDPage>
  );
};

export default Page;
