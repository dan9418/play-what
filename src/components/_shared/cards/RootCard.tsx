import Note from "@pw-core/models/Note";
import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps } from "../../../contexts/PagePropsContext";
import NumberUtils from "../../../core/general/Number.utils";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import { rootState } from "../../../state/state";
import Card from "../../_shared/ui/Card";
import InputRow from "../../_shared/ui/InputRow";
import DropdownInput from "../inputs/DropdownInput";

const StyledRoot = styled.div`
    h3 {
        color: ${props => props.theme.text.secondary};
    }

    ul {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(7, 1fr);
    }

    .oct-acc {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;

        .row {
            margin-top: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        ul {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-left: auto;
            button {
                height: 48px;
                width: 48px;
            }
        }
    }

    button {
        appearance: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 100%;
        text-decoration: none;
        font-size: 140%;
        padding: 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        //aspect-ratio: 1;
        color: ${({ theme }) => theme.action.interactive};

        &.active {
            background-color: ${props => props.theme.action.active};
            color: ${({ theme }) => theme.text.inverted};
            font-weight: bold;
        }

        :hover {
            background: ${({ theme }) => theme.utils.hoverDark};
            color: ${({ theme }) => theme.action.interactive};
        }
    }
`;


const NoteLink: React.FC<any> = ({ noteId }) => {
    const [root, setRoot] = useRecoilState(rootState);

    const base = root && root.id.replace('-flat', '').replace('-sharp', '');
    const note = Note.fromId(noteId);

    return (
        <button type="button" onClick={() => setRoot(note)} className={note.id === base ? 'active' : ''}>
            {note.name}
        </button >
    );
};

const AccidentalLink: React.FC<any> = ({ offset }) => {
    const [root, setRoot] = useRecoilState(rootState)

    const actualOffset = root.getAccidentalOffset();

    let base = root && root.id.replace('-flat', '').replace('-sharp', '');
    let suffix = '';
    if (offset === -1) suffix = '-flat';
    else if (offset === 1) suffix = '-sharp';

    const noteId = `${base}${suffix}`;

    const note = Note.fromId(noteId);

    return (
        <button type="button" onClick={() => setRoot(note)} className={offset === actualOffset ? 'active' : ''}>
            {offset === -1 && '♭'}
            {offset === 0 && '♮'}
            {offset === 1 && '♯'}
        </button >
    );
};

const NOTE_OPTIONS = [
    {
        id: 'unselected',
        name: '---'
    },
    ...NOTE_PRESETS
];

const RootCard: React.FC<any> = () => {
    const pageProps = usePageProps();
    const [root, setRoot] = useRecoilState(rootState);

    const octave = root && root.getOctave() || 4;
    const setOctave = v => {
        const note = new Note([(v - 4) * 12 + NumberUtils.modulo(root.pod[0], 12), root.pod[1]]);
        setRoot(note);
    };

    const selectedRoot = root ? root : { id: 'unselected' };

    return (

        <StyledRoot>
            <InputRow label="Root">
                <DropdownInput options={NOTE_OPTIONS} value={selectedRoot.id} setValue={note => setRoot(note.id === 'unselected' ? undefined : new Note(note.value))} />
            </InputRow>
        </StyledRoot>

    );
};

export default RootCard;
