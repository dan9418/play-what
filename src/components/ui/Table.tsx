
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
   
`;

interface IColConfig {
    isHeader?: boolean;
    content: any;
}

type TCol = string | number | IColConfig | ReactNode;

interface ITableProps {
    headers?: TCol[];
    footers?: TCol[];
    rows: {
        cols: TCol[];
    }[];
    styles?: any;
}

interface ITRowProps {
    cols: TCol[];
    isHeader?: boolean;
}

const TRow: React.FC<ITRowProps> = ({ cols, isHeader }) => {
    return (
        <tr>
            {cols.map((col: any, i) => {
                const content = col && col.hasOwnProperty('content') ? col.content : col;
                const ColTag = (isHeader || col && col.isHeader) ? 'th' : 'td';
                return <ColTag key={i}>{content || ''}</ColTag>
            })}
        </tr>
    );
}

export const Table: React.FC<ITableProps> = ({ headers, footers, rows, styles }) => {
    return (
        <StyledTable css={styles}>
            {headers && (
                <thead>
                    <TRow cols={headers} isHeader />
                </thead>
            )}
            {footers && (
                <tfoot>
                    <TRow cols={footers} isHeader />
                </tfoot>
            )}
            {rows && (
                <tbody>
                    {rows.map((row, i) => <TRow key={i} cols={row.cols} />)}
                </tbody>
            )}
        </StyledTable>
    );
}
