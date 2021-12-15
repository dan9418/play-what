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
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media(min-width: 512px) {
            grid-template-columns: auto auto;
            & > :first-child:not(:only-child) {
                padding-right: 16px;
                border-right: 1px solid #ccc;
            }
        }
        ul {
            grid-template-columns: repeat(3, 1fr);
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
        }
    }
`;

const NoteLink: React.FC<any> = ({ noteId }) => {
    const pageProps = usePageProps();
    const [rootParam] = useRootParam();

    const note = new Note(noteId);
    return <Link to={`${pageProps && pageProps.path}?root=${note.id}`} className={note.id === rootParam ? 'active' : ''
    }> {note.name}</Link >
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
                <h3>Spelling</h3>
                <ul>
                    <li><NoteLink noteId={NoteId.C} /></li>
                    <li><NoteLink noteId={NoteId.D} /></li>
                    <li><NoteLink noteId={NoteId.E} /></li>
                    <li><NoteLink noteId={NoteId.F} /></li>
                    <li><NoteLink noteId={NoteId.G} /></li>
                    <li><NoteLink noteId={NoteId.A} /></li>
                    <li><NoteLink noteId={NoteId.B} /></li>
                </ul>
                <h3>Accidental</h3>
                <div className="oct-acc">
                    <NumericInput value={4} setValue={null} />
                    <ul>
                        <li><NoteLink noteId={NoteId.C} /></li>
                        <li><NoteLink noteId={NoteId.D} /></li>
                        <li><NoteLink noteId={NoteId.E} /></li>
                    </ul>
                </div>
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
