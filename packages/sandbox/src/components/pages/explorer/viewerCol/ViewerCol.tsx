import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from "@pw/sandbox/src/state/dataState";
import { pathHeadState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS, { VIEWER } from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';
import getActions from "../shared/getActions";
import { IModelNode } from "@pw/core/src/models/Model.constants";
import { StyledHelpCard } from "@pw/sandbox/src/components/ui/layout/StyledCard";

interface IViewerColProps {
    editId: string | null,
    setEditId: any;
}

const ViewerCol: React.FC<IViewerColProps> = ({ editId, setEditId }) => {
    const [pathHead, setPathHead] = useRecoilState<IModelNode>(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const hasViewer = false;

    const viewer = (hasViewer) ?
        <Viewer modelConfig={pathHead.config} />
        :
        <StyledHelpCard>
            <h4>No Viewer</h4>
            <p>
                You can select a viewer from the action menu.
			</p>
        </StyledHelpCard>

    const name = hasViewer ? VIEWER[''].name : 'None';

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
