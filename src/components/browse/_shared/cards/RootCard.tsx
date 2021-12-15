import { NoteId } from "@pw-core/models/Model.constants";
import Note from "@pw-core/models/Note";
import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { useRootParam } from "../../../../state/state";
import NumericInput from "../../../_shared/inputs/NumericInput";
import Card from "../../../_shared/ui/Card";

const StyledRoot = styled.div`
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
            background-color: ${props => props.theme.state.active};
            color: ${({ theme }) => theme.white};
        }

        :hover {
            background: ${({ theme }) => theme.state.hoverDark};
            color: ${({ theme }) => theme.state.interactive};
        }
    }
`;


const NoteLink: React.FC<any> = ({ noteId }) => {
    const pageProps = usePageProps();
    const [rootParam] = useRootParam() as Note;
    let base = rootParam && rootParam.replace('-flat', '').replace('-sharp', '');

    const note = new Note(noteId);
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
                        <div className="row">
                            <h3>Octave</h3>
                            <NumericInput value={4} setValue={null} />
                        </div>
                        <div className="row">
                            <h3>Accidental</h3>
                            <div>
                                <ul>
                                    <li><AccidentalLink offset={-1} /></li>
                                    <li><AccidentalLink offset={0} /></li>
                                    <li><AccidentalLink offset={1} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
