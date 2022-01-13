import { Link } from "gatsby";
import React from "react";
import { useRootSuffix } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import { CHORD_PRESETS, SCALE_PRESETS } from "../../core/models/Model.presets";
import Scale from "../../core/models/Scale";
import Card from "../_shared/ui/Card";
import CollectionTable, { ICollectionTableProps } from "./CollectionTable";

const CollectionCard: React.FC<ICollectionTableProps> = ({ rows, headers, getCols }) => {
    return (
        <Card title="All Chords" >
            <CollectionTable headers={headers} rows={rows} getCols={getCols} />
        </Card>
    );
};

export default CollectionCard;

export const CollectionChordsCard: React.FC = props => {
    const rootSuffix = useRootSuffix();

    return (
        <CollectionCard
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
