import React from 'react';
import Core from '@play-what/core';
import './Concept.css';
import { IntervalList, KeyCenter, NoteList } from './ConceptHelpers';
import PresetInput from '../UI/PresetInput/PresetInput';

const Concept = ({ name, keyCenterData, setKeyCenterData, intervalsData, setIntervalsData, notes, colorFn }) => {
    return (
        <>
            <h3>{`Concept - ${name}`}</h3>
            <div className='card'>
                <div className='subcard-header'>
                    <h4>Key Center</h4>
                    <PresetInput presetData={Core.Vector.Note.preset} preset={keyCenterData} setPreset={setKeyCenterData} />
                </div>
                <div className='subcard'>
                    <KeyCenter keyCenter={keyCenterData.value} colorFn={colorFn} ctx={{ pod: keyCenterData.value }} />
                </div>

                <div className='math'>+</div>

                <div className='subcard-header'>
                    <h4>Intervals</h4>
                    <PresetInput presetData={Core.Matrix.presets} preset={intervalsData} setPreset={setIntervalsData} />
                </div>
                <div className='subcard'>
                    <IntervalList intervals={intervalsData.value} colorFn={colorFn} />
                </div>

                <div className='math'>=</div>

                <h4>Notes</h4>
                <div className='subcard'>
                    <NoteList notes={notes} colorFn={colorFn} keyCenter={keyCenterData.value} />
                </div>
            </div>
        </>
    );
}

export default Concept;
