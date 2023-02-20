import React from "react";
import { css } from "styled-components";
import { useRootId } from "../../contexts/PagePropsContext";
import { getName } from "../../core/models/Interval.utils";
import { IModelConfig, IPod, NoteId } from "../../core/models/Model.constants";
import { getRootedName } from "../../core/models/Pod.static";
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
  pods: IPod[],
  h: number,
  semitones: number[],
  rootId?: NoteId
) => {
  const index = pods.findIndex((ivl) => ivl[0] + 1 === h);
  const className = semitones.includes(h) ? "active" : undefined;
  if (index < 0) {
    return {
      className,
      content: "",
    };
  }
  const text = rootId ? "?" : getName(pods[index]);
  return {
    className,
    content: text,
  };
};

const CollectionTable: React.FC<ICollectionTableProps> = ({
  data,
  semitones = [],
}) => {
  const rootId = useRootId();
  return (
    <Table
      styles={tableStyles}
      thead={[
        {
          cols: [
            "Name",
            {
              colSpan: 12,
              content: rootId ? "Notes" : "Intervals",
            },
          ],
        },
      ]}
      tbody={data.map((d, i) => {
        return {
          cols: [
            {
              link: getModelRoute(d.presetType, d.presetId, rootId as NoteId),
              content: getRootedName(d, rootId as NoteId),
            },
            ...SEMITONES.map((h, i) =>
              getSemitoneCol(d.value, h, semitones, rootId as NoteId)
            ),
          ],
        };
      })}
    />
  );
};

export default CollectionTable;
