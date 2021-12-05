import { Link } from "gatsby";
import React from "react";
import { PodType, ScaleTag } from "../../../core/models/Model.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { SCALE_PRESETS } from "../../../core/models/PodList/Scale/Scale.constants";
import SearchPage from "../_shared/SearchPage";

const ScalesPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Scales"
            subtitle="A scale is a group of notes played sequentially"
            tag={ScaleTag}
            headers={[
                'Name',
                'Id',
                'Intervals'
            ]}
            rows={SCALE_PRESETS}
            getCols={preset => {
                return [
                    <Link to={`/browse/scales/${preset.id}`}>{preset.name}</Link>,
                    preset.id,
                    PodListUtils.getName(preset.value, PodType.Interval)
                ]
            }}
            {...props}
        />
    );
};

export default ScalesPage;
