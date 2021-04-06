import { IModelDef, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { pathHeadState, pathState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';

const ViewerCol = () => {
    const path = useRecoilValue(pathState);
    const [edit, setEdit] = useState(null);
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;
    const { name, preview, pathId, metaChildren } = (pathHead as IModelDef).data;

    const isGroup = modelId === MODEL_ID.Group;

    const viewer = <Viewer isBlank={isGroup} />;

    const viewerActions = VIEWER_ACTIONS;

    return (
        <Col
            title="Viewer"
            isOpen={edit === 'viewer'}
            setIsOpen={x => x ? setEdit('viewer') : setEdit(null)}
            actions={viewerActions}
            hasBorder
        >
            {viewer}
        </Col>
    );
};

export default ViewerCol;
