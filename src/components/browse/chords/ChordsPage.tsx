import React from "react";
import { ChordTag } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import SearchPage from "../_shared/SearchPage";

const ChordsPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Chords"
            subtitle="A chord is a group of notes played simultaneously"
            tag={ChordTag}
            presets={CHORD_PRESETS}
            prefix={`/browse/chords/`}
            {...props}
        />
    );
};

export default ChordsPage;
