import { StyledHelpCard } from "@pw/sandbox/src/components/ui/layout/StyledCard";
import React from "react";
import Col from '../../../ui/layout/Col';

interface IViewerColProps {
    editId: string | null,
    setEditId: any;
}

const ViewerCol: React.FC<IViewerColProps> = ({ editId, setEditId }) => {
    const hasViewer = false;

    const viewer = (hasViewer) ?
        null
        :
        <StyledHelpCard>
            <h4>No Viewer</h4>
            <p>
                You can select a viewer from the action menu.
            </p>
        </StyledHelpCard>

    const name = hasViewer ? '?' : 'None';

    const actions = [];

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
