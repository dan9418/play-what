import React from "react";
import { useRecoilState } from 'recoil';
import { pathHeadState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';

interface IViewerColProps {
    editId: string | null,
    setEditId: any;
}

const ViewerCol: React.FC<IViewerColProps> = ({ editId, setEditId }) => {
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

    const viewerActions = VIEWER_ACTIONS;

    return (
        <Col
            title="Viewer"
            isOpen={editId === 'viewer'}
            setIsOpen={x => x ? setEditId('viewer') : setEditId(null)}
            actions={viewerActions}
            hasBorder
        >
            <Viewer modelConfig={pathHead.config} />
        </Col>
    );
};

export default ViewerCol;
