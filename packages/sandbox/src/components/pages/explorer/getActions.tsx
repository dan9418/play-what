import React from "react";

const getActions = (actions, pathHead, setPathHeadConfig) => actions.map(a => ({
    ...a,
    /* @ts-ignore */
    editPanel: <a.component pathHead={pathHead} setPathHeadConfig={setPathHeadConfig} />
}));

export default getActions;
