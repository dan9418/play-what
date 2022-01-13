import { Link } from "gatsby";
import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { useRootSuffix } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import { ChordTag, ScaleTag } from "../../core/models/Model.constants";
import { CHORD_PRESETS, SCALE_PRESETS } from "../../core/models/Model.presets";
import Scale from "../../core/models/Scale";
import ButtonInput from "../_shared/inputs/ButtonInput";
import FilterList from "../_shared/inputs/FilterList";
import Card from "../_shared/ui/Card";
import CollectionTable, { ICollectionTableProps } from "./CollectionTable";

const StyledCollectionCard = styled.div`

`;

interface ICollectionCardProps extends ICollectionTableProps {
    tag?: any;
}

const CollectionCard: React.FC<ICollectionCardProps> = ({ tag, rows, headers, getCols }) => {
    const [isFiltering, setIsFiltering] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const action = <ButtonInput
        className={`filter ${isFiltering ? 'active' : ''}`}
        onClick={() => setIsFiltering(!isFiltering)}
        css={css`
            color: ${props => props.theme.action.interactive};
            background-color: transparent;
            text-decoration: underline;
            &.active {
                color: white;
                background-color: ${props => props.theme.action.interactive};
            }
        `}
    >
        Filter
    </ButtonInput>;

    const filteredRows = rows.filter(r => {
        if (!selectedTags.length) return true;
        for (let i = 0; i < selectedTags.length; i++) {
            if (!r.tags.includes(selectedTags[i])) {
                return false;
            }
        }
        return true;
    });

    return (
        <Card title="All Chords" action={action} >
            <StyledCollectionCard>
                {isFiltering && <FilterList tag={tag} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />}
                <CollectionTable headers={headers} rows={filteredRows} getCols={getCols} />
            </StyledCollectionCard>
        </Card>
    );
};

export default CollectionCard;

export const CollectionChordsCard: React.FC = props => {
    const rootSuffix = useRootSuffix();

    return (
        <CollectionCard
            tag={ChordTag}
            headers={[
                'Name',
                'Intervals',
            ]}
            rows={CHORD_PRESETS.map(p => new Chord(p.id))}
            getCols={preset => {
                return [
                    <Link to={`/browse/chords/${preset.id}/${rootSuffix}`}>{preset.name}</Link>,
                    preset.getIntervalListString(),
                ]
            }}
            {...props}
        />
    );
};

export const CollectionScalesCard: React.FC = props => {
    const rootSuffix = useRootSuffix();

    return (
        <CollectionCard
            tag={ScaleTag}
            headers={[
                'Name',
                'Intervals',
            ]}
            rows={SCALE_PRESETS.map(p => new Scale(p.id))}
            getCols={preset => {
                return [
                    <Link to={`/browse/scales/${preset.id}/${rootSuffix}`}>{preset.name}</Link>,
                    preset.getIntervalListString(),
                ]
            }}
            {...props}
        />
    );
};
