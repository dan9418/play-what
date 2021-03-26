import React from "react";

const getActions = (actions, pathHead, setPathHead) => actions.map(a => ({
    ...a,
    /* @ts-ignore */
    editPanel: <a.component pathHead={pathHead} setPathHead={setPathHead} />
}));

export default getActions;
