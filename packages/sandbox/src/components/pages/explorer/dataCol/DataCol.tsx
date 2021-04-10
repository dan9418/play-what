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

const PodCol = ({ editId, setEditId, root, rootActions, pods, podActions, level, isImplicitRoot }) => {
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
                title={isImplicitRoot ? "Intervals" : "Notes"}
                actions={podActions}
                isOpen={editId === 'intervals'}
                setIsOpen={x => x ? setEditId('intervals') : setEditId(null)}
            >
                <DataList metaChildren={pods} isEditing={editId === 'intervals'} level={level} />
            </Col>
        </div>
    );
};

const getPodColProps = (pathHead, setPathHeadConfig) => {

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;

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

    const podActions = DATA_ACTIONS;

    return {
        isImplicitRoot: !hasRoot,
        root,
        rootActions: [],
        pods: pathHead.metaChildren,
        podActions
    };
}

const DataCol = props => {
    const path = useRecoilValue(pathState);
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

    const { modelId } = (pathHead as IModelDef).config;

    const isGroup = modelId === MODEL_ID.Group;
    const level = path.length;

    if (isGroup)
        return (
            <GroupCol
                items={pathHead.metaChildren}
                level={level}
                itemsActions={DATA_ACTIONS}
                {...props}
            />
        );

    return (
        <PodCol
            level={level}
            {...getPodColProps(pathHead, setPathHeadConfig)}
            {...props}
        />
    );
};

export default DataCol;
