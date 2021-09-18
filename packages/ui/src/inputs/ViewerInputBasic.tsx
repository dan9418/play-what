import React from "react";
import styled from 'styled-components';
import { VIEWER_PRESETS, VIEWER_PRESET_MAP } from "../../../viewers/src/Viewer.constants";
import DropdownInput from "./DropdownInput";

const StyledViewerInputBasic = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
`;

const ViewerInputBasic: React.FC<any> = editProps => {

    const { viewerId, setBeforeViewerId, setBeforeViewerProps } = editProps;

    const selectedViewerConfig = VIEWER_PRESET_MAP.get(viewerId);

    const setViewerId = (config) => {
        setBeforeViewerId(config.id);
        setBeforeViewerProps(config.value.presets[0].id)
    }

    return (
        <StyledViewerInputBasic>
            <div className="top">
                <DropdownInput
                    value={{ id: viewerId }}
                    setValue={setViewerId}
                    options={VIEWER_PRESETS}
                />
            </div>
        </StyledViewerInputBasic>
    );
};

export default ViewerInputBasic;
