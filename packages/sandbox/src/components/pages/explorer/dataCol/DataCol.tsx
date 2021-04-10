import { IModelDef, MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { pathHeadState, pathState } from '../../../../state/pathState';
import Col from '../../../ui/layout/Col';
import DATA_ACTIONS from './actions/dataActions';
import DataList from './DataList';

const GroupCol = ({ editId, setEditId, items, level, itemsActions }) => {
    return <Col
        title="Items"
        actions={itemsActions}
        isOpen={editId === 'items'}
        setIsOpen={x => x ? setEditId('items') : setEditId(null)}
    >
        <DataList metaChildren={items} isEditing={editId === 'items'} level={level} />
    </Col>
};

const PodCol = ({ editId, setEditId, root, rootActions, intervals, intervalActions, level, isImplicitRoot }) => {
    return (
        <div className="double">
            <Col
                title="Root"
                actions={rootActions}
                isOpen={editId === 'root'}
                setIsOpen={x => x ? setEditId('root') : setEditId(null)}
                isDisabled={isImplicitRoot}
            >
                <DataList metaChildren={root} isEditing={editId === 'root'} level={level} />
            </Col>
            <Col
                title="Notes"
                actions={intervalActions}
                isOpen={editId === 'intervals'}
                setIsOpen={x => x ? setEditId('intervals') : setEditId(null)}
            >
                <DataList metaChildren={intervals} isEditing={editId === 'intervals'} level={level} />
            </Col>
        </div>
    );
};

const getColProps = (_modelValue, modelOptions, hasChildren) => {

    const hasRoot = !!(modelOptions && modelOptions.modelRoot);

    const rootConfig = {
        modelId: MODEL_ID.Note,
        modelValue: hasRoot ? modelOptions.modelRoot : [0, 0]
    };
    const rootData = ModelUtils.getData(rootConfig)
    const root = [{
        config: rootConfig,
        data: rootData
    }];

    const modelValue = hasChildren ? _modelValue : [_modelValue];

    const intervals = modelValue.map((ivl, i) => {
        const intervalConfig = {
            modelId: MODEL_ID.Interval,
            modelValue: ivl,
            modelOptions
        };
        const intervalData = ModelUtils.getData(intervalConfig, i)
        return {
            config: intervalConfig,
            data: intervalData
        };
    });

    return {
        isImplicitRoot: !hasRoot,
        root,
        rootActions: DATA_ACTIONS,
        intervals,
        intervalActions: DATA_ACTIONS
    };
}

const DataCol = props => {
    const path = useRecoilValue(pathState);
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;
    const { metaChildren } = pathHead

    const isGroup = modelId === MODEL_ID.Group;

    if (isGroup)
        return <GroupCol items={metaChildren} level={path.length} itemsActions={DATA_ACTIONS} {...props} />;

    return <PodCol
        {...getColProps(modelValue, modelOptions, !!metaChildren)}
        level={path.length}
        {...props}
    />;
};

export default DataCol;
