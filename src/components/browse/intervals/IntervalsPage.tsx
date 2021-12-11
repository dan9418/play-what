import { Link } from "gatsby";
import React from "react";
import { IntervalTag } from "@pw-core/models/Model.constants";
import { INTERVAL_PRESETS } from "@pw-core/models/Model.presets";
import SearchPage from "../_shared/SearchPage";

const IntervalsPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Intervals"
            subtitle="An interval is the distance between two notes"
            tag={IntervalTag}
            headers={[
                'Name',
                'Tags'
            ]}
            rows={INTERVAL_PRESETS}
            getCols={preset => {
                return [
                    <Link to={`/browse/intervals/${preset.id}`}>{preset.name}</Link>,
                    preset.tags.join(', ')
                ]
            }}
            {...props}
        />
    );
};

export default IntervalsPage;
