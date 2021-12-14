import React from "react";
import styled from 'styled-components';

const StyledSearchTable = styled.table`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    border-collapse: collapse;

    thead {
        tr th {
            text-align: left;
            background-color: ${props => props.theme.surface.nav};
            padding: 8px;
            color: ${({ theme }) => theme.white};
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: rgba(0,0,0,0.1);
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
    getCols: (row: any) => any[];
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
