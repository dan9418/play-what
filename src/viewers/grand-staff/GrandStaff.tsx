import React from 'react';
import styled from 'styled-components';
import Card, { CardHeader } from '../../components/ui/Card';

const NOTES = [
    {
        note: 'F5',
        staff: 'treble',
        line: true
    },
    {
        note: 'E5',
        staff: 'treble',
        line: false
    },
    {
        note: 'D5',
        staff: 'treble',
        line: true
    },
    {
        note: 'C5',
        staff: 'treble',
        line: false
    },
    {
        note: 'B5',
        staff: 'treble',
        line: true
    },
    {
        note: 'A5',
        staff: 'treble',
        line: false
    },
    {
        note: 'G4',
        staff: 'treble',
        line: true
    },
    {
        note: 'F4',
        staff: 'treble',
        line: false
    },
    {
        note: 'E4',
        staff: 'treble',
        line: true
    },
    {
        note: 'D4',
        staff: 'treble',
        line: false
    },
    {
        note: 'C4',
        staff: null,
        line: true
    },
    {
        note: 'B4',
        staff: 'bass',
        line: false
    },
    {
        note: 'A4',
        staff: 'bass',
        line: true
    },
    {
        note: 'G3',
        staff: 'bass',
        line: false
    },
    {
        note: 'F3',
        staff: 'bass',
        line: true
    },
    {
        note: 'E3',
        staff: 'bass',
        line: false
    },
    {
        note: 'D3',
        staff: 'bass',
        line: true
    },
    {
        note: 'C3',
        staff: 'bass',
        line: false
    },
    {
        note: 'B3',
        staff: 'bass',
        line: true
    },
    {
        note: 'A3',
        staff: 'bass',
        line: false
    },
    {
        note: 'G2',
        staff: 'bass',
        line: true
    },
];

const StyledGrandStaff = styled.div`
    .staff {
        border-right: 4px solid black;
        border-left: 4px solid black;
    }

    .note {
        margin: auto;
        width: 32px;
        &.treble, &.bass {
            width: 100%;
        }
        &.line {
            border-top: 1px solid black;
        }
        &:not(.line) {
            height: 12px;
        }
    }
`

const GrandStaff = ({ model }) => {
    return null;
    return (
        <StyledGrandStaff>
            <Card >
                <CardHeader title="Grand Staff" />
                <div className='staff'>
                    {NOTES.map(n => <div className={`note ${n.note} ${n.line ? 'line' : ''} ${n.staff || ''}`} />)}
                </div>
            </Card>
        </StyledGrandStaff>
    );
}

export default GrandStaff;
