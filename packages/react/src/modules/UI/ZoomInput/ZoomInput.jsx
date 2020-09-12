import React from 'react';
import { ZOOM } from '../../Common/Constants';
import ButtonInput from '../ButtonInput/ButtonInput';
import './ZoomInput.css';

export const ZOOM_VALUES = [
    {
        id: ZOOM.Chart,
        name: 'Chart',
        label: '••••'
    },
    {
        id: ZOOM.Section,
        name: 'Section',
        label: '•••'
    },
    {
        id: ZOOM.Progression,
        name: 'Progression',
        label: '••'
    },
    {
        id: ZOOM.Concept,
        name: 'Concept',
        label: '•'
    }
];

const ZoomInput = props => {
    const { zoom, setZoom } = props;

    return (
        <div className="zoom-input">
            {ZOOM_VALUES.map((z, i) => {
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setZoom(z.id)}
                        className={`pw-${z.id} ${zoom === z.id ? 'pw-active' : ``}`}>{z.label}
                    </ButtonInput>
                );
            })}
        </div>
    );
}

export default ZoomInput;