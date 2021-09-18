import React from "react";
import styled from 'styled-components';
import IntervalsInputBasic from "./IntervalsInputBasic";
import RootInputBasic from "./RootInputBasic";
import ViewerInputBasic from "./ViewerInputBasic";

const StyledQuickInput = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
`;

const QuickInput: React.FC<any> = editProps => {

    return (
        <StyledQuickInput>
            <div className="root">
                <h4>Root</h4>
                <RootInputBasic {...editProps} />
            </div>
            <div className="intervals">
                <h4>Intervals</h4>
                <IntervalsInputBasic {...editProps} />
            </div>
            <div className="intervals">
                <h4>Viewer</h4>
                <ViewerInputBasic {...editProps} />
            </div>
        </StyledQuickInput>
    );
};

export default QuickInput;
