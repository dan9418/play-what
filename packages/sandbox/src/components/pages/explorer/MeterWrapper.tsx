import React from "react";
import { useRecoilState } from 'recoil';
import Meter from '../../../../../react/src/Meter/Meter';
import { useIsDesktop, useIsTablet } from '../../../hooks/useWindowSize';
import { IPathNode, pathHeadState } from '../../../state/pathState';

const MeterWrapper = () => {
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);
    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();

    const { modelId, modelValue, modelOptions } = (pathHead as IPathNode).config;

    let range = [0, 12];
    if (isTablet) {
        range = [-12, 12]
    }
    if (isDesktop) {
        range = [-39, 48]
    }

    return (
        <Meter modelId={modelId} modelValue={modelValue} modelOptions={modelOptions} range={range} matchOctave={isDesktop} />
	);
};

export default MeterWrapper;
