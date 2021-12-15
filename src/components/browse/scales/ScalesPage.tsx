import { ScaleTag } from "@pw-core/models/Model.constants";
import { SCALE_PRESETS } from "@pw-core/models/Model.presets";
import Scale from "@pw-core/models/Scale";
import { Link } from "gatsby";
import React from "react";
import SearchPage from "../_shared/SearchPage";

const ScalesPage: React.FC<any> = props => {

    return (
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
    );
};

export default ScalesPage;
