import { ChordTag } from "@pw-core/models/Model.constants";
import { CHORD_PRESETS } from "@pw-core/models/Model.presets";
import { Link } from "gatsby";
import React from "react";
import Chord from "../../../core/models/Chord";
import SearchPage from "../_shared/SearchPage";

const ChordsPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Chords"
            subtitle="A chord is a group of notes played simultaneously"
            tag={ChordTag}
            headers={[
                'Name',
                'Intervals',
                //'Tags'
            ]}
            rows={CHORD_PRESETS.map(p => new Chord(p.id))}
            getCols={preset => {
                return [
                    <Link to={`/browse/chords/${preset.id}`}>{preset.name}</Link>,
                    preset.getIntervalListString(),
                    //preset.tags.join(', ')
                ]
            }}
            {...props}
        />
    );
};

export default ChordsPage;
