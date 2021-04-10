import { IModelDef } from "@pw/core/src/models/Model.constants";
import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from 'recoil';
import Meter from '../../../../../viewers/src/Meter/Meter';
import { useIsDesktop, useIsTablet } from '../../../hooks/useWindowSize';
import { matchOctaveState, pathHeadState } from '../../../state/pathState';

const StyledMeterWrapper = styled.div`
    padding: 0 4px 4px;
`;

const MeterWrapper = () => {
    const pathHead = useRecoilValue(pathHeadState);
    const matchOctave = useRecoilValue(matchOctaveState);
    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;

    let range = [0, 12];
    if (isTablet) {
        range = [-12, 12]
    }
    if (isDesktop) {
        range = [-39, 48]
    }

    return (
        <StyledMeterWrapper>
            <Meter modelId={modelId} modelValue={modelValue} modelOptions={modelOptions} range={range} matchOctave={matchOctave} />
        </StyledMeterWrapper>
    );
};

export default MeterWrapper;
