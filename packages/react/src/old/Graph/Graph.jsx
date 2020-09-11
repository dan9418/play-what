import React from 'react';
import './Graph.css';

const Cell = props => {
    const { x, y, color } = props;
    return (
        <div className='cell'>
            {color && <div className='point' style={{ backgroundColor: color }} />}
        </div>
    );
};

const Label = ({ axis, children }) => {
    return (
        <div className={`label ${axis}`}>
            {children}
        </div>
    );
};

const areEqual = (v1, v2, x, y, max) => {
    const mod = (a, b) => ((a % b) + b) % b; //PW.Utils.modulo;
    const xEqual = mod(v1[x], max[x]) === mod(v2[x], max[x]);
    const yEqual = mod(v1[y], max[y]) === mod(v2[y], max[y]);
    return xEqual && yEqual;
}

const getCells = (origin, vectors, x, y, max) => {
    const cells = [];
    for (let i = max[y] - 1; i >= -1; i--) {
        cells.push(<Label key={'y' + i} axis='y'>{i > -1 && i}</Label>)
        for (let j = 0; j < max[x]; j++) {
            if (i === -1) {
                cells.push(<Label key={'x' + j} axis='x'>{j}</Label>)
            }
            else {
                const point = { [x]: j, [y]: i };
                const isOrigin = areEqual(origin, point, x, y, max);
                const isResultant = vectors.findIndex(v => areEqual(v, point, x, y, max)) >= 0;
                cells.push(<Cell key={j + '-' + i} x={j} y={i} color={isOrigin ? 'red' : isResultant ? 'blue' : null} />)
            }
        }
    }
    return cells;
};

const DEFAULT_PROPS = {
    origin: { p: 0, d: 0 },
    vectors: [{ p: 2, d: 2 }],
    x: 'd',
    y: 'p',
    max: { p: 12, d: 7 },
    title: 'x vs y',
    xLabel: 'x',
    yLabel: 'y'
}

const Graph = props => {
    const config = { ...DEFAULT_PROPS, ...props };
    const { origin, vectors, x, y, max, title, xLabel, yLabel } = config;
    return (
        <div className="graph-container">
            <div className="graph-title">{title}</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="y-label">{yLabel}</div>
                <div className="graph">{getCells(origin, vectors, x, y, max)}</div>
            </div>
            <div className="x-label">{xLabel}</div>
        </div>
    );
}

export default Graph;