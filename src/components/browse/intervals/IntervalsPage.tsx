import React from "react";
import { IntervalTag } from "../../../core/models/Model.constants";
import { INTERVAL_PRESETS } from "../../../core/models/Pod/Interval/Interval.constants";
import SearchPage from "../_shared/SearchPage";

const IntervalsPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Intervals"
            subtitle="An interval is the distance between two notes"
            tag={IntervalTag}
            presets={INTERVAL_PRESETS}
            prefix={`/browse/intervals/`}
            {...props}
        />
    );
};

export default IntervalsPage;
