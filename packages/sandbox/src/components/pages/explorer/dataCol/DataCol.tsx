import { ModelId } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import { StyledHelpCard } from '@pw/sandbox/src/components/ui/layout/StyledCard';
import React from "react";
import Col from '../../../ui/layout/Col';
import getActions from '../shared/getActions';
import DATA_ACTIONS from './actions/dataActions';
import DataList from './DataList';

const getColProps = (pathHead, setPathHead, setModal) => {

    const root = null;

    const actions = getActions(DATA_ACTIONS, pathHead, setPathHead, setModal);

    const title = root ? "Notes" : "Intervals";
    const subtitle = root ? `Root = ${ModelUtils.getName(ModelId.Note, root)}` : "Root = C4 (implicit)";

    return {
        title,
        subtitle,
        actions
    };
}

const getEditProps = (editId, setEditId, id) => {
    return {
        isOpen: editId === id,
        setIsOpen: x => setEditId(x ? id : null)
    }
}

interface IDataColProps {
    editId: string | null,
    setEditId: any;
}

const DataCol: React.FC<IDataColProps> = ({ editId, setEditId }) => {
    const level = 0;

    const colProps = getColProps(null, null, null);
    const editProps = getEditProps(editId, setEditId, 'data');

    const isEmpty = true;

    return (
        <Col {...colProps} {...editProps} hasBorder>
            {isEmpty && (
                <StyledHelpCard>
                    <h4>No Data</h4>
                    <p>
                        You can import a preset and set a root from the action menu.
                    </p>
                </StyledHelpCard>
            )}
            <DataList metaChildren={[]} isEditing={editProps.isOpen} level={level} />
        </Col>
    );
};

export default DataCol;
