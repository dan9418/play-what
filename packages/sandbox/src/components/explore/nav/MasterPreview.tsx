import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IPod, PodType } from '../../../../../core/src/models/Model.constants';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import viewerUtils from '../../../../../viewers/src/viewer.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import THEME from '../../../styles/theme';

export const StyledMasterPreview = styled.h1`
    color: ${THEME.primary};
`;

const MasterPreview: React.FC = () => {

    // @ts-ignore
    const [beforeRoot, setBeforeRoot] = useRecoilState(rootState);
    // @ts-ignore
    const [afterRoot, setAfterRoot] = useState(beforeRoot);

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    // @ts-ignore
    const viewerId = useRecoilValue(viewerIdState);
    // @ts-ignore
    const viewerProps = useRecoilValue(viewerPropsState);

    const modalContext = useModalContext();

    const rootTitle = NoteUtils.getName(afterRoot)
    const intervalsTitle = PodListUtils.getName(afterIntervals, PodType.Interval);
    const preset = PodListUtils.findPreset(afterIntervals);

    const subtitle = preset ? preset.name : 'Unknown';

    const beforeDetails = PodListUtils.getDetails(beforeRoot, beforeIntervals);
    const afterDetails = PodListUtils.getDetails(afterRoot, afterIntervals);

    const viewerDetails = viewerUtils.getDetails(viewerId, viewerProps);

    const onSubmit = () => {
        setBeforeRoot(afterRoot as IPod);
        setBeforeIntervals(afterIntervals as IPod[]);
    };

    return (
        <StyledMasterPreview>
            {`${rootTitle} ${subtitle || intervalsTitle}`}
        </StyledMasterPreview>
    )
}

export default MasterPreview;
