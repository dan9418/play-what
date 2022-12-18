
import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
   
`;

interface ITRowProps {
    cols: string[];
    isHeader?: boolean;
}

const TRow: React.FC<ITRowProps> = ({ cols, isHeader }) => {
    const ColTag = isHeader ? 'th' : 'td';
    return (
        <tr>
            {cols.map(col => <ColTag key={col}>{col}</ColTag>)}
        </tr>
    );
}

interface ITableProps {
    headers?: string[];
    footers?: string[];
    rows: {
        cols: string[];
    }[];
    styles?: any;
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
