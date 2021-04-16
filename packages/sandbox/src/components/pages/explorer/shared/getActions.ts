import { IAction } from "@pw/sandbox/src/components/ui/layout/OverflowMenu";
import { IModelNode } from "@pw/core/src/models/Model.constants";
import { IModalAction } from "@pw/sandbox/src/components/ui/layout/Modal";

export interface IActionProps {
    pathHead: IModelNode;
    setPathHead: (IModelNode) => void;
}

const getActions = (actionConfigs: IModalAction[], pathHead: IModelNode, setPathHead: (IModelNode) => void, setModal: (any) => void): IAction[] => {
    const actions = actionConfigs.map(a => {
        const { component, ...rest } = a;

        return {
            name: a.name,
            onClick: () => setModal({
                ...rest,
                component,
                props: {
                    pathHead,
                    setPathHead
                }
            })
        }
    });
    return actions;
}

export default getActions;
