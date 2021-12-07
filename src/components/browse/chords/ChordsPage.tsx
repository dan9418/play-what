import { Link } from "gatsby";
import React from "react";
import { ChordTag, ModelId } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import SearchPage from "../_shared/SearchPage";

const ChordsPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Chords"
            subtitle="A chord is a group of notes played simultaneously"
            tag={ChordTag}
            headers={[
                'Name',
                'Id',
                'Intervals'
            ]}
            rows={CHORD_PRESETS}
            getCols={preset => {
                return [
                    <Link to={`/browse/chords/${preset.id}`}>{preset.name}</Link>,
                    preset.id,
                    PodListUtils.getName(preset.value, ModelId.Interval)
                ]
            }}
            {...props}
        />
    );
};

export default ChordsPage;
