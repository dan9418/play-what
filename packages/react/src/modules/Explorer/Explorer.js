import Core from '@pw/core';
import React, { useState } from "react";
import "./Explorer.css";
import Concept from '../Concept/Concept';
import List from '../List/List';
import APIBrowser from './APIBrowser';
import PresetInput from '../UI/PresetInput/PresetInput';
import Fretboard from '../Fretboard/_module';

const DEFAULT_PROPS = {
    colorFn: Core.Vector.colorBy({ type: 'degree' }),
    intervals: [],
    keyCenter: null
}

const Out = ({ keyCenterData, setKeyCenterData, intervalsData, setIntervalsData }) => {
    if (!keyCenterData || !intervalsData) return null;

    const keyCenter = keyCenterData.value;
    const intervals = intervalsData.value;

    const name = `${keyCenterData.name} ${intervalsData.name}`;

    const colorFn = DEFAULT_PROPS.colorFn;
    const viewer = Fretboard;

    const notes = Core.Vector.addMatrix({ a: keyCenter, B: intervals });
    const modes = Core.Matrix.Scale.getAllModes({ keyCenter, scale: intervals });
    const numerals = Core.Matrix.Scale.getAllNumerals({ keyCenter, scale: intervals });

    console.log(keyCenter, intervals, notes, modes, numerals);

    return (
        <div className='out'>
            <Concept
                name={name}
                keyCenterData={keyCenterData}
                setKeyCenterData={setKeyCenterData}
                intervalsData={intervalsData}
                setIntervalsData={setIntervalsData}
                notes={notes}
                colorFn={colorFn}
            />
            <List name={`Modes`} viewer={viewer} list={modes} colorFn={colorFn} />
            <List name={`Roman Numerals`} viewer={viewer} list={numerals} colorFn={colorFn} />
        </div>
    );
}

const Explorer = () => {

    const [keyCenterData, setKeyCenterData] = useState(Core.Vector.Note.preset.C);
    const [intervalsData, setIntervalsData] = useState(Core.Matrix.Scale.preset.Major);

    return (
        <div className='explorer'>
            {false && <APIBrowser />}
            <Out
                keyCenterData={keyCenterData}
                setKeyCenterData={setKeyCenterData}
                intervalsData={intervalsData}
                setIntervalsData={setIntervalsData}
            />
        </div>
    );
}

export default Explorer;
