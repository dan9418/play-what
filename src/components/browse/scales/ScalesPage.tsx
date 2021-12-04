import React from "react";
import { ScaleTag } from "../../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../../core/models/PodList/Scale/Scale.constants";
import SearchPage from "../_shared/SearchPage";

const ScalesPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Scales"
            subtitle="A scale is a group of notes played sequentially"
            tag={ScaleTag}
            presets={SCALE_PRESETS}
            prefix={`/browse/scales/`}
            {...props}
        />
    );
};

export default ScalesPage;
