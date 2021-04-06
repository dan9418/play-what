import { IModelDef, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import { useRecoilState } from 'recoil';
import { pathHeadState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';

const ViewerCol = ({ editId, setEditId }) => {
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;

    const isGroup = modelId === MODEL_ID.Group;

    const viewerActions = VIEWER_ACTIONS;

    return (
        <Col
            title="Viewer"
            isOpen={editId === 'viewer'}
            setIsOpen={x => x ? setEditId('viewer') : setEditId(null)}
            actions={viewerActions}
            hasBorder
        >
            <Viewer isBlank={isGroup} />
        </Col>
    );
};

export default ViewerCol;
