import { NoteId } from "@pw-core/models/Model.constants";
import Note from "@pw-core/models/Note";
import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { useOctaveParam, useRootParam } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";
import InputRow from "../../../_shared/ui/InputRow";

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
            a {
                height: 48px;
                width: 48px;
            }
        }
    }

    a {
        width: 100%;
        text-decoration: none;
        font-size: 140%;
        padding: 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;

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
    const pageProps = usePageProps();
    const [rootParam, setRootParam, root] = useRootParam() as Note;
    let base = rootParam && rootParam.replace('-flat', '').replace('-sharp', '');

    const note = Note.fromId(noteId);

    return (
        <Link to={`${pageProps && pageProps.path}?root=${note.id}`} className={note.id === base ? 'active' : ''}>
            {note.name}
        </Link >
    );
};

const AccidentalLink: React.FC<any> = ({ offset }) => {
    const pageProps = usePageProps();
    const [rootParam, b, root] = useRootParam() as Note;

    const actualOffset = root.getAccidentalOffset();

    let base = rootParam.replace('-flat', '').replace('-sharp', '');
    let suffix = '';
    if (offset === -1) suffix = '-flat';
    else if (offset === 1) suffix = '-sharp';

    return (
        <Link to={`${pageProps && pageProps.path}?root=${base}${suffix}`} className={offset === actualOffset ? 'active' : ''}>
            {offset === -1 && '♭'}
            {offset === 0 && '♮'}
            {offset === 1 && '♯'}
        </Link >
    );
};

const OctaveLink: React.FC<any> = ({ offset }) => {
    const pageProps = usePageProps();
    const [octaveParam, setOctaveParam] = useOctaveParam();

    const targetOctave = (octaveParam || 4) + offset;

    const to = pageProps.location.href.includes('octave=') ?
        pageProps.location.href.replace(`octave=${octaveParam}`, `octave=${targetOctave}`) :
        `${pageProps && pageProps.location.href}&octave=${targetOctave}`;

    return (
        <Link to={to} className={offset === 0 ? 'active' : ''}>
            {targetOctave}
        </Link >
    );
};

const RootCard: React.FC<any> = () => {
    const pageProps = usePageProps();
    const [rootParam, b, root] = useRootParam();

    return (
        <Card
            title={`Root`}
            action={rootParam ? <Link to={pageProps && pageProps.path}>Clear</Link> : undefined}
        >
            <StyledRoot>
                <ul>
                    <li><NoteLink noteId={NoteId.C} /></li>
                    <li><NoteLink noteId={NoteId.D} /></li>
                    <li><NoteLink noteId={NoteId.E} /></li>
                    <li><NoteLink noteId={NoteId.F} /></li>
                    <li><NoteLink noteId={NoteId.G} /></li>
                    <li><NoteLink noteId={NoteId.A} /></li>
                    <li><NoteLink noteId={NoteId.B} /></li>
                </ul>
                {rootParam &&
                    <div className="oct-acc">
                        <InputRow label="Accidental">
                            <ul>
                                <li><AccidentalLink offset={-1} /></li>
                                <li><AccidentalLink offset={0} /></li>
                                <li><AccidentalLink offset={1} /></li>
                            </ul>
                        </InputRow>
                        <InputRow label="Octave">
                            <ul>
                                <li><OctaveLink offset={-1} /></li>
                                <li><OctaveLink offset={0} /></li>
                                <li><OctaveLink offset={1} /></li>
                            </ul>
                        </InputRow>
                    </div>
                }
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
