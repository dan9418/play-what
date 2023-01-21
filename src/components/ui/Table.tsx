import { Link } from "gatsby";
import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";

const StyledTable = styled.table``;

type TOmit = undefined | null | false;

const getIsTypeOmit = (data: any): data is TOmit =>
  data === undefined || data === null || data === false;

// Col

export interface IColConfig {
  isHeader?: boolean;
  content: any;
  colSpan?: number;
  className?: string;
  link?: string;
}

interface IColProps extends IColConfig {
  index: number;
}

type TCol = string | number | IColConfig | ReactNode;

const Col: React.FC<IColProps> = ({
  index,
  isHeader,
  content,
  colSpan,
  className,
  link,
}) => {
  const ColTag = isHeader ? "th" : "td";
  const WrapperTag = link ? Link : Fragment;
  const wrapperProps: any = link ? { to: link } : {};

  return (
    <ColTag colSpan={colSpan} className={className}>
      <WrapperTag {...wrapperProps}>{content || ""}</WrapperTag>
    </ColTag>
  );
};

// Row

export interface IRowConfig {
  cols: (TCol | TOmit)[];
  className?: string;
  isHeader?: boolean;
  headerColIndicies?: number[];
}

const getIsConfig = (col: TCol): col is IColConfig =>
  typeof col === "object" && col !== null && col.hasOwnProperty("content");

const Row: React.FC<IRowConfig> = ({
  cols,
  isHeader,
  className,
  headerColIndicies = [],
}) => {
  return (
    <tr className={className}>
      {cols.map((col: any, i) => {
        if (getIsTypeOmit(col)) return null;
        const isConfig = getIsConfig(col);
        const colConfig = !isConfig ? { content: col } : col;
        return (
          <Col
            key={i}
            index={i}
            isHeader={isHeader || headerColIndicies.includes(i)}
            {...colConfig}
          />
        );
      })}
    </tr>
  );
};

// Table Section

interface ITableSectionConfig {
  Tag: "thead" | "tfoot" | "tbody";
  rows: (IRowConfig | TOmit)[];
  headerColIndicies?: number[];
}

const TableSection: React.FC<ITableSectionConfig> = ({
  Tag,
  rows,
  headerColIndicies,
}) => (
  <Tag>
    {rows.map((row, i) => {
      if (getIsTypeOmit(row)) return null;
      return (
        <Row
          key={i}
          isHeader={Tag !== "tbody"}
          headerColIndicies={headerColIndicies}
          {...row}
        />
      );
    })}
  </Tag>
);

// Table

interface IColGroup {
  span?: number;
  className?: string;
}

interface ITableConfig {
  thead?: (IRowConfig | TOmit)[];
  tfoot?: (IRowConfig | TOmit)[];
  tbody: (IRowConfig | TOmit)[];
  styles?: any;
  caption?: string;
  colGroups?: IColGroup[];
  className?: string;
  headerColIndicies?: number[];
}

export const Table: React.FC<ITableConfig> = ({
  thead,
  tfoot,
  tbody,
  styles,
  colGroups,
  caption,
  headerColIndicies,
  className,
}) => {
  return (
    <StyledTable css={styles} className={className}>
      {colGroups && (
        <colgroup>
          {colGroups.map((cg, i) => (
            <col key={i} {...cg} />
          ))}
        </colgroup>
      )}
      {caption && <caption>{caption}</caption>}
      {thead && (
        <TableSection
          Tag="thead"
          rows={thead}
          headerColIndicies={headerColIndicies}
        />
      )}
      {tfoot && (
        <TableSection
          Tag="tfoot"
          rows={tfoot}
          headerColIndicies={headerColIndicies}
        />
      )}
      {tbody && (
        <TableSection
          Tag="tbody"
          rows={tbody}
          headerColIndicies={headerColIndicies}
        />
      )}
    </StyledTable>
  );
};
