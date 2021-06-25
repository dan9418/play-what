import { IModelDef } from "@pw/core/src/models/Model.constants";
import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from 'recoil';
import Meter from '../../../../../viewers/src/Meter/Meter';
import { useIsDesktop, useIsTablet } from '../../../hooks/useWindowSize';
import { matchOctaveState, pathHeadState } from '../../../state/pathState';
import { hoveredIndexState } from "../../../state/dataState";

const StyledMeterWrapper = styled.div`
    padding-top: 16px;
`;

const MeterWrapper: React.FC = () => {
    const pathHead = useRecoilValue(pathHeadState);
    const matchOctave = useRecoilValue(matchOctaveState);
    const [hoveredIndex, setHoveredIndex] = useRecoilState(hoveredIndexState);

    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();

    const { modelId, modelValue } = (pathHead as IModelDef).config;

    let range = [0, 12];
    if (isTablet) {
        range = [-12, 12]
    }
    if (isDesktop) {
        range = [-39, 48]
    }

    return (
        <StyledMeterWrapper>
            <Meter modelId={modelId} modelValue={modelValue} range={range} matchOctave={matchOctave} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
        </StyledMeterWrapper>
    );
};

export default MeterWrapper;
