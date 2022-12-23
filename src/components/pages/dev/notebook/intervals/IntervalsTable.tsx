
import React from 'react';
import IntervalSpan from '../../../../../core/models/Interval';
import { IntervalId } from '../../../../../core/models/Model.constants';
import { Table } from '../../../../ui/Table';
import { TABLE_STYLES_1 } from '../../../../ui/Table.styles';


const getName = (id: IntervalId): string => {
    return (new IntervalSpan(id)).getName();
}

const FOOTERS = [
    {
        cols: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    }
];

const ROWS = [
    {
        cols: [
            '',
            '',
            '',
            getName(IntervalId.A2),
            '',
            getName(IntervalId.A3),
            getName(IntervalId.A4),
            '',
            getName(IntervalId.A5),
            '',
            getName(IntervalId.A6),
            ''
        ]
    },
    {
        cols: [
            getName(IntervalId.P1),
            getName(IntervalId.m2),
            getName(IntervalId.M2),
            getName(IntervalId.m3),
            getName(IntervalId.M3),
            getName(IntervalId.P4),
            '',
            getName(IntervalId.P5),
            getName(IntervalId.m6),
            getName(IntervalId.M6),
            getName(IntervalId.m7),
            getName(IntervalId.M7)
        ]
    },
    {
        cols: [
            '',
            '',
            getName(IntervalId.d3),
            '',
            getName(IntervalId.d4),
            '',
            getName(IntervalId.d5),
            getName(IntervalId.d6),
            '',
            getName(IntervalId.d7),
            '',
            ''
        ]
    }
];

export const IntervalsTable: React.FC = () => {
    return (
        <Table tfoot={FOOTERS} tbody={ROWS} styles={TABLE_STYLES_1} />
    );
}
