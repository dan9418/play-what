import { IModelDef, MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { pathHeadState, pathState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import VIEWER_ACTIONS from './../viewerCol/actions/viewerActions';
import Viewer from './../viewerCol/Viewer';
import DATA_ACTIONS from './actions/dataActions';
import DataList from './DataList';

const GroupCol = ({ editId, setEditId, items, level }) => {
    return <Col
        title="Items"
        actions={[]}
        isOpen={editId === 'items'}
        setIsOpen={x => x ? setEditId('items') : setEditId(null)}
    >
        <DataList metaChildren={items} isEditing={editId === 'items'} level={level} />
    </Col>
};

const UnrootedCol = ({ editId, setEditId, intervals, level }) => {
    return <Col
        title="Intervals"
        actions={[]}
        isOpen={editId === 'intervals'}
        setIsOpen={x => x ? setEditId('data') : setEditId(null)}
    >
        <DataList metaChildren={intervals} isEditing={editId === 'intervals'} level={level} />
    </Col>
};

const RootedCol = ({ editId, setEditId, root, intervals, notes, level }) => {
    return (
        <div className="double">
            <Col
                title="Root"
                actions={[]}
                isOpen={editId === 'root'}
                setIsOpen={x => x ? setEditId('root') : setEditId(null)}
            >
                <DataList metaChildren={root} isEditing={editId === 'root'} level={level} />
            </Col>
            <Col
                title="Intervals"
                actions={[]}
                isOpen={editId === 'intervals'}
                setIsOpen={x => x ? setEditId('intervals') : setEditId(null)}
            >
                <DataList metaChildren={intervals} isEditing={editId === 'intervals'} level={level} />
            </Col>
            <Col
                title="Notes"
                actions={[]}
                isOpen={editId === 'notes'}
                setIsOpen={x => x ? setEditId('notes') : setEditId(null)}
            >
                <DataList metaChildren={notes} isEditing={editId === 'notes'} level={level} />
            </Col>
        </div>
    );
};

const getRootedProps = (modelId, modelRoot, modelValue, metaChildren) => {

    const rootConfig = {
        modelId: MODEL_ID.Note,
        modelValue: modelRoot
    };
    const rootData = ModelUtils.getData(rootConfig)
    const root = [{
        config: rootConfig,
        data: rootData
    }];

    const intervalConfig = {
        modelId,
        modelValue
    };
    const intervalData = ModelUtils.getData(intervalConfig)
    const intervals = [{
        config: intervalConfig,
        data: intervalData
    }];

    return {
        root,
        intervals,
        notes: metaChildren
    };
}

const DataCol = props => {
    const path = useRecoilValue(pathState);
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;
    const { name, preview, metaChildren } = (pathHead as IModelDef).data;

    const isGroup = modelId === MODEL_ID.Group;

    const dataActions = DATA_ACTIONS;

    const hasRoot = !isGroup && modelOptions && modelOptions.modelRoot;


    if (isGroup)
        return <GroupCol intervals={metaChildren} level={path.length} {...props} />;

    return hasRoot ?
        <RootedCol {...getRootedProps(modelId, modelOptions.modelRoot, modelValue, metaChildren)} level={path.length} {...props} />
        :
        <UnrootedCol intervals={metaChildren} level={path.length} {...props} />;

};

export default DataCol;
