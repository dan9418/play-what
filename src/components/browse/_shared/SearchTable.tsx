import React from "react";
import styled from 'styled-components';
import THEME, { COLOR } from "../../../styles/theme";

const StyledSearchTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead {
        tr th {
            text-align: left;
            background-color: ${THEME.surface.nav};
            padding: 8px;
            color: white;
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: ${COLOR.light2};
            }
        }
    }

    a {
        display: block;
        padding: 8px;
    }
`;

export interface ISearchTableProps {
    rows: any[];
    headers: string[];
    getCols: (row: any) => any[]
}

const SearchTable: React.FC<ISearchTableProps> = ({ rows, headers, getCols }) => {
    return (
        <StyledSearchTable>
            <thead>
                <tr>
                    {headers.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(row => (
                        <tr>
                            {getCols(row).map((c, i) => <td key={i}>{c}</td>)}
                        </tr>
                    ))
                }
            </tbody>
        </StyledSearchTable>
    );
};

export default SearchTable;
