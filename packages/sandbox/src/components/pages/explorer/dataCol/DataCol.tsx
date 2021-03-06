import { IModelDef, ModelId } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import { modalState } from '@pw/sandbox/src/state/dataState';
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { StyledHelpCard } from '@pw/sandbox/src/components/ui/layout/StyledCard';
import { pathHeadState, pathState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import getActions from '../shared/getActions';
import DATA_ACTIONS from './actions/dataActions';
import DataList from './DataList';

const getColProps = (pathHead, setPathHead, setModal) => {

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;

    const root = modelOptions && modelOptions.modelRoot;
    const isGroup = modelId === ModelId.Group;

    const actions = getActions(DATA_ACTIONS, pathHead, setPathHead, setModal);

    if (isGroup) {
        return {
            title: "Data",
            subtitle: ModelUtils.getPreview(modelId, modelValue, modelOptions),
            actions
        };
    }

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
    const path = useRecoilValue(pathState);
    const [pathHead, setPathHead] = useRecoilState(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const level = path.length;

    const colProps = getColProps(pathHead, setPathHead, setModal);
    const editProps = getEditProps(editId, setEditId, 'data');

    const isEmpty = !path.length && !pathHead.config.modelValue.length

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
            <DataList metaChildren={pathHead.metaChildren} isEditing={editProps.isOpen} level={level} />
        </Col>
    );
};

export default DataCol;
