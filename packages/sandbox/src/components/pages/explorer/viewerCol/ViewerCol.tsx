import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from "@pw/sandbox/src/state/dataState";
import { pathHeadState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS, { VIEWER } from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';
import getActions from "../shared/getActions";
import { IModelNode } from "core/src/models/Model.constants";

interface IViewerColProps {
    editId: string | null,
    setEditId: any;
}

const ViewerCol: React.FC<IViewerColProps> = ({ editId, setEditId }) => {
    const [pathHead, setPathHeadConfig] = useRecoilState<IModelNode>(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const { modelOptions } = pathHead.config;

    if (!modelOptions || !modelOptions.viewerId) return null;

    const { viewerId } = modelOptions;

    const viewerName = VIEWER[viewerId].name;

    const actions = getActions(VIEWER_ACTIONS, pathHead, setPathHeadConfig, setModal);

    return (
        <Col
            title="Viewer"
            subtitle={viewerName}
            isOpen={editId === 'viewer'}
            setIsOpen={x => x ? setEditId('viewer') : setEditId(null)}
            actions={actions}
            hasBorder
        >
            <Viewer modelConfig={pathHead.config} />
        </Col>
    );
};

export default ViewerCol;
