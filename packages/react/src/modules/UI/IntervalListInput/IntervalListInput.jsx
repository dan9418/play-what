import React from 'react';
import './IntervalListInput.css';
import IntervalInput from '../IntervalInput/IntervalInput';

const getIntervalRows = (intervals, setIntervals) => {
    return intervals.map((v, i) => {
        const setIntervalValue = ivl => setIntervals([...intervals.slice(0, i), ivl, ...(intervals.slice(i + 1))]);
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td><IntervalInput interval={v} setInterval={setIntervalValue} /></td>
            </tr>
        );
    });
};

const IntervalListInput = props => {
    return (
        <table className="interval-list-input">
            <tbody>
                {getIntervalRows(props.intervals, props.setIntervals)}
            </tbody>
        </table>
    )
}

export default IntervalListInput;