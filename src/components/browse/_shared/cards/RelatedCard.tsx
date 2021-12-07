import { Link } from "gatsby";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { ALL_MODELS } from "../../../../core/models/AllModels";
import PodListUtils from "../../../../core/models/PodList/PodList.utils";
import { intervalsState } from "../../../../state/state";
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


const RelatedCard: React.FC<any> = () => {
    const intervals = useRecoilValue(intervalsState);

    console.log('dpb xxx', intervals);

    if (!intervals) return null;

    const subsets = ALL_MODELS.filter(preset => PodListUtils.containsSubset(intervals.value, preset.value));
    const supersets = ALL_MODELS.filter(preset => PodListUtils.containsSubset(preset.value, intervals.value));

    return (
        <Card title="Related">
            <StyledRelated>
                <h3>Subsets</h3>
                <ul>
                    {subsets.map(s => (
                        <li key={s.id}><Link to={`/browse/${s.type}/${s.id}`}>{s.name}</Link></li>
                    ))}
                </ul>
                <h3>Supersets</h3>
                <ul>
                    {supersets.map(s => (
                        <li key={s.id}><Link to={`/browse/${s.type}/${s.id}`}>{s.name}</Link></li>
                    ))}
                </ul>
            </StyledRelated>
        </Card>
    );
};

export default RelatedCard;
