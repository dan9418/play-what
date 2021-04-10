import { IAction } from "@pw/sandbox/src/components/ui/layout/OverflowMenu";

const getActions = (actionConfigs, pathHead, setPathHeadConfig, setModal): IAction[] => {
    const actions = actionConfigs.map(a => {
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
    return actions;
}

export default getActions;
