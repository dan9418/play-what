import React from "react";
import { css } from "styled-components";
import { useRoot, useRootId } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import {
  IModelConfig,
  ModelType,
  NoteId,
} from "../../core/models/Model.constants";
import Note from "../../core/models/Note";
import Scale from "../../core/models/Scale";
import { getModelRoute } from "../../core/routing/Routing.utils";
import { Table } from "../ui/Table";

const tableStyles = css`
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  white-space: nowrap;

  td {
    &:not(:first-child) {
      font-size: 80%;
    }
  }

  td,
  th {
    line-height: 32px;
    text-align: center;

    &:not(:first-child) {
      width: 32px;
      height: 32px;

      display: none;
      @media (min-width: 512px) {
        display: table-cell;
      }
    }

    &:first-child {
      text-align: left;
      padding: 0 8px;
    }
  }

  td {
    //border-right: 1px solid ${(props) => props.theme.utils.border};
    //border-bottom: 1px solid ${(props) => props.theme.utils.border};
    &.active {
      background-color: ${(props) => props.theme.surface.bg};
    }
  }

  thead {
    text-transform: uppercase;
    font-size: 80%;

    @media (max-width: 511px) {
      display: none;
    }
    tr th {
      background-color: ${(props) => props.theme.surface.nav};
      color: ${({ theme }) => theme.text.inverted};
    }

    th:first-child {
      border-radius: 8px 0 0 8px;
    }
    th:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  a {
    display: block;
  }
`;

export interface ICollectionTableProps {
  data: IModelConfig[];
  semitones?: number[];
}

const SEMITONES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getSemitoneCol = (
  model: Chord | Scale,
  h: number,
  semitones: number[],
  root?: Note
) => {
  const index = model.intervals.findIndex((ivl) => ivl.pod[0] + 1 === h);
  const className = semitones.includes(h) ? "active" : undefined;
  if (index < 0) {
    return {
      className,
      content: "",
    };
  }
  const mod = root ? (model.notes as Note[])[index] : model.intervals[index];
  return {
    className,
    content: mod.getName(),
  };
};

const CollectionTable: React.FC<ICollectionTableProps> = ({
  data,
  semitones = [],
}) => {
  const rootId = useRootId();
  const root = useRoot();
  return (
    <Table
      styles={tableStyles}
      thead={[
        {
          cols: [
            "Name",
            {
              colSpan: 12,
              content: root ? "Notes" : "Intervals",
            },
          ],
        },
      ]}
      tbody={data.map((d, i) => {
        const cl = d.modelType === ModelType.Chord ? Chord : Scale;
        // @ts-ignore
        const model = new cl(d.modelId, { root });
        return {
          cols: [
            {
              link: getModelRoute(
                model.modelType,
                model.modelId,
                rootId as NoteId
              ),
              content: model.getName(),
            },
            ...SEMITONES.map((h, i) =>
              getSemitoneCol(model, h, semitones, root)
            ),
          ],
        };
      })}
    />
  );
};

export default CollectionTable;
