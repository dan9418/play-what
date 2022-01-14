import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRoot, useRootSuffix } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import { IModelConfig, ModelId } from "../../core/models/Model.constants";
import Scale from "../../core/models/Scale";

const StyledCollectionTable = styled.table`
    width: 100%;
    margin: auto;
    border-collapse: collapse;
    white-space: nowrap;

    td, th {
        line-height: 32px;
        
        &:not(:first-child) {
            text-align: center;
            width: 32px;
            height: 32px;
        }

        &:first-child {
            text-align: left;
            padding: 0 8px;
        }

        
    }

    td {
        //border-right: 1px solid ${props => props.theme.utils.border};
        //border-bottom: 1px solid ${props => props.theme.utils.border};
        &.active {
            background-color: ${props => props.theme.surface.bg};
        }
    }

    thead {
        tr th {
            background-color: ${props => props.theme.surface.nav};
            color: ${({ theme }) => theme.text.inverted};
        }
        th:first-child {
            border-radius: 8px 0 0 8px;
        }
        th:last-child {
            border-radius: 0 8px 8px 0;
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: ${({ theme }) => theme.utils.hoverDark};
            }
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

const SEMITONES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const CollectionTable: React.FC<ICollectionTableProps> = ({ data, semitones = [] }) => {
    const rootSuffix = useRootSuffix();
    const root = useRoot();
    return (
        <StyledCollectionTable>
            <thead>
                <tr>
                    <th>Name</th>
                    {SEMITONES.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    data.map(d => {
                        const cl = d.modelId === ModelId.Chord ? Chord : Scale;
                        const model = new cl(d.id, { root });

                        return (
                            <tr>
                                <td>
                                    <Link to={`/browse/${model.modelId}/${model.id}/${rootSuffix}`}>
                                        {model.getShortName()}
                                    </Link>
                                </td>
                                {SEMITONES.map((h, i) => {
                                    const index = model.intervals.findIndex(ivl => ivl.pod[0] + 1 === h);
                                    const className = semitones.includes(h) ? 'active' : '';
                                    if (index < 0) return <td key={i} className={className} />;
                                    const mod = root ? model.notes[index] : model.intervals[index];
                                    return (
                                        <td key={i} className={className}>
                                            {mod.getName()}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })
                }
            </tbody>
        </StyledCollectionTable>
    );
};

export default CollectionTable;
