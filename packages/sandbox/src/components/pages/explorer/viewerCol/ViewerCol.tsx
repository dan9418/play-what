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
    const [pathHead, setPathHead] = useRecoilState<IModelNode>(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const { modelOptions } = pathHead.config;

    const hasViewer = modelOptions && modelOptions.viewerId;

    const viewer = (hasViewer) ?
        <Viewer modelConfig={pathHead.config} />
        :
        <div>
            There is no viewer, yet...
        </div>

    const name = hasViewer ? VIEWER[modelOptions.viewerId].name : 'None';

    const actions = getActions(VIEWER_ACTIONS, pathHead, setPathHead, setModal);

    return (
        <Col
            title="Viewer"
            subtitle={name}
            isOpen={editId === 'viewer'}
            setIsOpen={x => setEditId(x ? 'viewer' : null)}
            actions={actions}
        >
            {viewer}
        </Col>
    );
};

export default ViewerCol;
