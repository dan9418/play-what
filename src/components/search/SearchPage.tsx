import { Link } from "gatsby";
import React, { useState } from "react";
import styled from 'styled-components';
import Chord from "../../core/models/Chord";
import { ChordTag } from "../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../core/models/Model.presets";
import FilterList from "../_shared/inputs/FilterList";
import Card from "../_shared/ui/Card";
import SearchTable, { ISearchTableProps } from "./SearchTable";

const StyledSearchCard = styled.div`
    .filter-box {
        //background-color: ${props => props.theme.status.highlight};
        border: 1px solid ${props => props.theme.action.interactive};
        border-radius: 8px;
        padding: 8px;
        margin-bottom: 16px;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 0 8px;

            h3 {
                margin: 0;
                color: ${props => props.theme.text.secondary};
            }

            .clear {
                background-color: transparent;
                color: ${props => props.theme.action.interactive};
                text-decoration: underline;
                border: none;
                appearance: none;
                padding: 4px;
                cursor: pointer;
            }
        }
    }
`;

interface ISearchCardProps extends ISearchTableProps {
    tag?: any;
}

const SearchCard: React.FC<ISearchCardProps> = ({ tag, rows, headers, getCols }) => {

    const [selectedTags, setSelectedTags] = useState([]);

    const filteredRows = rows.filter(r => {
        if (!selectedTags.length) return true;
        for (let i = 0; i < selectedTags.length; i++) {
            if (!r.tags.includes(selectedTags[i])) {
                return false;
            }
        }
        return true;
    });

    const tags = tag && Object.values(tag);/*.filter(t => {
        return filteredRows.find(r => r.tags.includes(t))
    });*/

    return (
        <Card title="All Chords">
            <StyledSearchCard>
                <div className="filter-box">
                    <div className="top">
                        <h3>Filters</h3>
                        {selectedTags.length > 0 &&
                            <button
                                type="button"
                                onClick={() => setSelectedTags([])}
                                className="clear"
                            >Clear</button>
                        }
                    </div>
                    {tags &&
                        <FilterList tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                    }
                </div>
                <SearchTable headers={headers} rows={filteredRows} getCols={getCols} />
            </StyledSearchCard>
        </Card>
    );
};

export default SearchCard;

export const SearchChordsCard: React.FC = props => {
    return (
        <SearchCard
            tag={ChordTag}
            headers={[
                'Name',
                'Intervals',
            ]}
            rows={CHORD_PRESETS.map(p => new Chord(p.id))}
            getCols={preset => {
                return [
                    <Link to={`/browse/chords/${preset.id}`}>{preset.name}</Link>,
                    preset.getIntervalListString(),
                ]
            }}
            {...props}
        />
    );
};

/*
<SearchPage
    title="Scales"
    subtitle="A scale is a group of notes played sequentially"
    tag={ScaleTag}
    headers={[
        'Name',
        'Intervals',
        //'Tags'
    ]}
    rows={SCALE_PRESETS.map(p => new Scale(p.id))}
    getCols={preset => {
        return [
            <Link to={`/browse/scales/${preset.id}`}>{preset.name}</Link>,
            preset.getIntervalListString(),
            //preset.tags.join(', ')
        ]
    }}
    {...props}
/>
*/
