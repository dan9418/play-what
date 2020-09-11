import * as React from "react";
import PW from '@play-what/core';
import "./Concept.css";
import PodMeter from "./Meter";

export const Frequency = ({ f }) => <div className="frequency">{`${f} Hz`}</div>;
export const Name = ({ name }) => <div className="name">{`${name}`}</div>;
export const Pod = ({ p, d }) => <div className="pod">{`(${p}, ${d})`}</div>;
export const PitchIndex = ({ pitchIndex }) => <div className="pitch-index">{`#${pitchIndex}`}</div>;

export const Note = ({ pod, ctx, colorFn }) => {
    const pitchIndex = pod.p;
    const name = PW.Vector.Note.getName(ctx);
    const f = Math.round(PW.Tuning.getFrequency(pod.p));
    const colorStyles = colorFn(ctx)

    return (
        <div className='note' style={colorStyles}>
            <Name name={name} />
            <div>
                <PitchIndex pitchIndex={pitchIndex} />
                <Pod {...pod} />
            </div>
            <Frequency f={f} />
        </div>
    );
};

export const NoteList = ({ notes, keyCenter, colorFn }) => {
    const noteComps = notes.map((n, i) => <Note pod={n} ctx={{ pod: n, homePod: keyCenter }} colorFn={colorFn} key={i} />);
    return (
        <>
            <div className='flex-row'>
                {noteComps}
            </div>
            <PodMeter pods={notes} />
        </>
    );
};

export const Interval = ({ pod, ctx, colorFn }) => {
    const name = PW.Vector.Interval.getName(ctx);
    const pitchIndex = pod.p;
    const styles = colorFn(ctx);

    return (
        <div className='interval' style={styles}>
            <Name name={name} />
            <div>
                <PitchIndex pitchIndex={pitchIndex} />
                <Pod {...pod} />
            </div>
        </div>
    );
};

export const IntervalList = ({ intervals, colorFn }) => {
    const intervalComps = intervals.map((n, i) => <Interval pod={n} ctx={{ pod: n }} colorFn={colorFn} key={i} />);
    return (
        <>
            <div className='flex-row'>
                {intervalComps}
            </div>
            <PodMeter pods={intervals} />
        </>
    );
};

export const KeyCenter = ({ keyCenter, ctx, colorFn }) => {
    return (
        <div className='key-center'>
            <Note pod={keyCenter} ctx={{ pod: keyCenter }} colorFn={colorFn} />
            <div className='meter-container'>
                <PodMeter pods={[keyCenter]} />
            </div>
        </div>
    );
};
