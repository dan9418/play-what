import { Link } from "gatsby";
import React from "react";
import { ModelId, ScaleTag } from "../../../core/models/Model.constants";
import ModelUtils from "../../../core/models/Model.utils";
import { SCALE_PRESETS } from "../../../core/models/Scale.constants";
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
                    ModelUtils.getName(preset.value, ModelId.Interval)
                ]
            }}
            {...props}
        />
    );
};

export default ScalesPage;
