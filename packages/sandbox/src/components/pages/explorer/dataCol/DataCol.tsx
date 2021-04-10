import { IModelDef, MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import React from "react";
import { useSetRecoilState } from 'recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '@pw/sandbox/src/state/dataState';
import { pathHeadState, pathState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import DATA_ACTIONS from './actions/dataActions';
import DataList from './DataList';

const getColProps = (pathHead, setPathHeadConfig, setModal) => {

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;

    const root = modelOptions && modelOptions.modelRoot;
    const isGroup = modelId === MODEL_ID.Group;

    const actions = DATA_ACTIONS.map(a => {
        const { component, ...rest } = a;

        return {
            name: a.name,
            onClick: () => setModal({
                ...rest,
                component,
                props: {
                    pathHead,
                    setPathHeadConfig
                }
            })
        }
    });

    if (isGroup) {
        return {
            title: "Data",
            subtitle: ModelUtils.getPreview(modelId, modelValue, modelOptions),
            actions
        };
    }

    const title = root ? "Notes" : "Intervals";
    const subtitle = root ? `Root = ${ModelUtils.getName(MODEL_ID.Note, root)}` : "Root = C (implicit)";

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
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const level = path.length;

    const colProps = getColProps(pathHead, setPathHeadConfig, setModal);
    const editProps = getEditProps(editId, setEditId, 'data');

    return (
        <Col {...colProps} {...editProps}>
            <DataList metaChildren={pathHead.metaChildren} isEditing={editProps.isOpen} level={level} />
        </Col>
    );
};

export default DataCol;
