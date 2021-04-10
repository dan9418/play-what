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

const PodCol = ({ editId, setEditId, pods, podActions, level, root }) => {
    return (
        <Col
            title={root ? "Notes" : "Intervals"}
            subtitle={root ? `Root = ${ModelUtils.getName(MODEL_ID.Note, root)}` : "Root = C (implicit)"}
            actions={podActions}
            isOpen={editId === 'intervals'}
            setIsOpen={x => x ? setEditId('intervals') : setEditId(null)}
        >
            <DataList metaChildren={pods} isEditing={editId === 'intervals'} level={level} />
        </Col>
    );
};

const getPodColProps = (pathHead, setPathHeadConfig, setModal) => {

    const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;

    const root = modelOptions && modelOptions.modelRoot;

    /*const rootConfig = {
        modelId: MODEL_ID.Note,
        modelValue: hasRoot ? modelOptions.modelRoot : [0, 0]
    };
    const rootData = ModelUtils.getData(rootConfig)
    const root = [{
        config: rootConfig,
        data: rootData
    }];*/

    const podActions = DATA_ACTIONS.map(a => {
        const { component, ...rest } = a;

        return {
            ...rest,
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

    return {
        root,
        pods: pathHead.metaChildren,
        podActions
    };
}

const DataCol = props => {
    const path = useRecoilValue(pathState);
    const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);
    const setModal = useSetRecoilState(modalState);

    const { modelId } = (pathHead as IModelDef).config;

    const isGroup = modelId === MODEL_ID.Group;
    const level = path.length;

    if (isGroup)
        return (
            <GroupCol
                items={pathHead.metaChildren}
                level={level}
                itemsActions={[]}
                {...props}
            />
        );

    return (
        <PodCol
            level={level}
            {...getPodColProps(pathHead, setPathHeadConfig, setModal)}
            {...props}
        />
    );
};

export default DataCol;
