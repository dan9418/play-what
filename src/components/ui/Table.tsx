
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
   
`;

// Col

interface IColConfig {
    isHeader?: boolean;
    content: any;
}

interface IColProps extends IColConfig {
    index: number;
}

type TCol = string | number | IColConfig | ReactNode;

const Col: React.FC<IColProps> = ({ index, isHeader, content }) => {
    const ColTag = isHeader ? 'th' : 'td';
    return <ColTag>{content || ''}</ColTag>
}

// Row

interface IRowConfig {
    defaultColConfig?: Omit<IColConfig, 'content'>;
    cols: TCol[];
}

const getIsConfig = (col: TCol): col is IColConfig => typeof col === 'object' && col !== null && col.hasOwnProperty('content');

const Row: React.FC<IRowConfig> = ({ cols, defaultColConfig = {} }) => {
    return (
        <tr>
            {cols.map((col: any, i) => {
                const isDefined = !!col;
                const isConfig = getIsConfig(col);
                const colConfig = !isDefined ?
                    defaultColConfig :
                    !isConfig ? {
                        ...defaultColConfig,
                        content: col
                    } : {
                        ...defaultColConfig,
                        ...col
                    }
                return <Col key={i} index={i} content="" {...colConfig} />
            })}
        </tr>
    );
}

// Table Section

interface ITableSectionConfig {
    Tag: 'thead' | 'tfoot' | 'tbody';
    rows: IRowConfig[];
}

const TableSection: React.FC<ITableSectionConfig> = ({ Tag, rows }) => (
    <Tag>
        {rows.map((row, i) => <Row key={i} cols={row.cols} defaultColConfig={
            Tag === 'tbody' ?
                row.defaultColConfig :
                {
                    isHeader: true,
                    ...(row.defaultColConfig || {})
                }
        } />)}
    </Tag>
)

// Table

interface ITableConfig {
    thead?: IRowConfig[];
    tfoot?: IRowConfig[];
    tbody: IRowConfig[];
    styles?: any;
    caption?: string;
    colGroup?: any[];
}

export const Table: React.FC<ITableConfig> = ({ thead, tfoot, tbody, styles, colGroup, caption }) => {
    return (
        <StyledTable css={styles}>
            {caption && <caption>{caption}</caption>}
            {thead && <TableSection Tag="thead" rows={thead} />}
            {tfoot && <TableSection Tag="tfoot" rows={tfoot} />}
            {tbody && <TableSection Tag="tbody" rows={tbody} />}
        </StyledTable>
    );
}
