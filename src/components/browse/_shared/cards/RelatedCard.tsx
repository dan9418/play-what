import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledRelated = styled.div`
    h3 {
        margin-bottom: 8px;
    }

    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
        }
        margin-bottom: 16px;
    }
`;


const RelatedCard: React.FC<any> = ({ model }) => {

    const subsets = model.getSubsets && model.getSubsets();
    const supersets = model.getSupersets && model.getSupersets();
    const intervals = model.getIntervalListClasses && model.getIntervalListClasses();
    const notes = model.getNoteListClasses && model.getNoteListClasses();

    return (
        <Card title="Related">
            <StyledRelated>
                {notes && notes.length > 0 &&
                    <>
                        <h3>Notes</h3>
                        <ul>
                            {notes.map(s => (
                                <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </>
                }
                {intervals && intervals.length > 0 &&
                    <>
                        <h3>Intervals</h3>
                        <ul>
                            {intervals.map(ivl => {
                                return (
                                    <li key={ivl.id}>
                                        <Link to={`/browse/intervals/${ivl.id}`}>{ivl.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                }
                {subsets && subsets.length > 0 &&
                    <>
                        <h3>Subsets</h3>
                        <ul>
                            {subsets.map(s => (
                                <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </>
                }
                {supersets && supersets.length > 0 &&
                    <>
                        <h3>Supersets</h3>
                        <ul>
                            {supersets.map(s => (
                                <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </>
                }
            </StyledRelated>
        </Card>
    );
};

export default RelatedCard;
