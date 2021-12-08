import { Link } from "gatsby";
import React from "react";
import { IntervalTag } from "../../../core/models/Model.constants";
import { INTERVAL_PRESETS } from "../../../core/models/Interval/Interval.constants";
import SearchPage from "../_shared/SearchPage";

const IntervalsPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Intervals"
            subtitle="An interval is the distance between two notes"
            tag={IntervalTag}
            headers={[
                'Name',
                'Id'
            ]}
            rows={INTERVAL_PRESETS}
            getCols={preset => {
                return [
                    <Link to={`/browse/intervals/${preset.id}`}>{preset.name}</Link>,
                    preset.id
                ]
            }}
            {...props}
        />
    );
};

export default IntervalsPage;
