/*
export interface IContext {
    index: number;
    key: string;
    data?: any;
}

export type IContextArg = Omit<IContext, 'index'>;

interface IHeader {
    className?: string;
    colSpan?: number;
    link?: string;
    content: ReactNode;
}

interface ICell extends IHeader {
    isHeader?: boolean;
}

interface ITableConfig {
    styles?: any;
    caption?: string;
    className?: string;
    rowContexts: IContextArg[];
    colContexts: IContextArg[];
    getCell: (rowContext: IContext, colContext: IContext) => ICell;
    getHeader?: (colContext: IContext) => IHeader;
    getFooter?: (colContext: IContext) => IHeader;
}

export const Table: React.FC<ITableConfig> = ({ styles, caption, className, rowContexts, colContexts, getCell, getHeader, getFooter }) => {
    return (
        <StyledTable css={styles} className={className}>
            {caption && <caption>{caption}</caption>}
            {getHeader &&
                <thead>
                    <tr>
                        {colContexts.map((colContext, c) => {
                            const cell = getHeader({ ...colContext, index: c })
                            const { content, colSpan, className } = cell;
                            return <th className={className} colSpan={colSpan}>{content}</th>
                        })}
                    </tr>
                </thead>
            }
            {getFooter &&
                <tfoot>
                    <tr>
                        {colContexts.map((colContext, c) => {
                            const cell = getFooter({ ...colContext, index: c })
                            const { content, colSpan, className } = cell;
                            return <th className={className} colSpan={colSpan}>{content}</th>
                        })}
                    </tr>
                </tfoot>
            }
            <tbody>
                {rowContexts.map((rowContext, r) => (
                    <tr key={rowContext.key}>
                        {colContexts.map((colContext, c) => {
                            const cell = getCell({ ...rowContext, index: r }, { ...colContext, index: c })
                            const { isHeader, content, colSpan, className } = cell;
                            const Tag = isHeader ? 'th' : 'td';
                            return <Tag className={className} colSpan={colSpan}>{content}</Tag>
                        })}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
}
*/
