import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from "@pw/sandbox/src/state/dataState";
import { pathHeadState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS, { VIEWER } from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';
import getActions from "../shared/getActions";

interface IViewerColProps {
    editId: string | null,
    setEditId: any;
}

const ViewerCol: React.FC<IViewerColProps> = ({ editId, setEditId }) => {
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const { modelOptions } = pathHead.config;
    const { viewerId } = modelOptions || { viewerId: VIEWER.fretboard.id };

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
