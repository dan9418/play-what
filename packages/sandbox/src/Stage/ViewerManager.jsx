import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { useRecoilValue } from 'recoil';
import { parsedSourceState } from '../Common/State';
import './Stage.css';

const Level = ({ parsedLevel }) => {
    if (!parsedLevel) return null;

    if (typeof parsedLevel === 'string' || typeof parsedLevel === 'number' || parsedLevel === null)
        return parsedLevel;

    if (Array.isArray(parsedLevel)) {
        return parsedLevel.map(l => <Level parsedLevel={l} />);
    }

    const { component, children, props } = parsedLevel;
    const isComponent = !!component;

    const Component = isComponent ? component : React.Fragment;
    const newProps = isComponent ? props : {};
    const newChildren = children ? children.map((c, i) => <Level key={i} parsedLevel={c} />) : null;

    return (
        <Component {...newProps}>
            {newChildren}
        </Component>
    );
};


/*{
    updated_src: src, //new src value
    name: name, //new var name
    namespace: namespace, //list, namespace indicating var location
    new_value: new_value, //new variable value
    existing_value: existing_value, //existing variable value
}*/


const ViewerManager = () => {
    const parsedSource = useRecoilValue(parsedSourceState);
    const [isPreviewOpen, setIsPreviewOpen] = useState(true);

    return (
        <div className="viewer-manager">
            <div className="json-wrapper">
                {isPreviewOpen && <Level parsedLevel={parsedSource} />}
                {!isPreviewOpen && <ReactJson src={parsedSource} name="Props" collapsed />}
            </div>
        </div>
    );
};

export default ViewerManager;
