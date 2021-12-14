import { NoteId } from "@pw-core/models/Model.constants";
import Note from "@pw-core/models/Note";
import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StringParam, useQueryParam } from "use-query-params";
import { usePageProps } from "../../../../contexts/PagePropsContext";
import Card from "../../../_shared/ui/Card";

const StyledRoot = styled.div`
   table {
        border-collapse: collapse;
        width: 100%;

        td {
            padding: 1px;
        }

        a {
            text-decoration: none;
            font-size: 90%;
            padding: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 1;

            &.active {
                background-color: ${props => props.theme.active};
                color: ${({ theme }) => theme.white};
            }

            :hover {
                background: ${({ theme }) => theme.hover};
            }
        }
        .primary a {
            font-weight: bold;
            font-size: 110%;
            padding: 8px;
        }
    }
`;

const NoteLink: React.FC<any> = ({ noteId }) => {
    const pageProps = usePageProps();
    const [rootParam, setRootParam] = useQueryParam("root", StringParam);

    const note = new Note(noteId);
    return <Link to={`${pageProps && pageProps.path}?root=${note.id}`} className={note.id === rootParam ? 'active' : ''
    }> {note.name}</Link >
};

const RootCard: React.FC<any> = () => {
    const pageProps = usePageProps();
    const [rootParam, setRootParam] = useQueryParam("root", StringParam);
    return (
        <Card
            title={`${rootParam ? 'Change' : 'Set'} Root`}
            action={rootParam ? <Link to={pageProps && pageProps.path}>Clear</Link> : undefined}
        >
            <StyledRoot>
                <table>
                    <tbody>
                        <tr>
                            <td><NoteLink noteId={NoteId.Cs} /></td>
                            <td><NoteLink noteId={NoteId.Ds} /></td>
                            <td><NoteLink noteId={NoteId.Es} /></td>
                            <td><NoteLink noteId={NoteId.Fs} /></td>
                            <td><NoteLink noteId={NoteId.Gs} /></td>
                            <td><NoteLink noteId={NoteId.As} /></td>
                            <td><NoteLink noteId={NoteId.Bs} /></td>
                        </tr>
                        <tr className="primary">
                            <td><NoteLink noteId={NoteId.C} /></td>
                            <td><NoteLink noteId={NoteId.D} /></td>
                            <td><NoteLink noteId={NoteId.E} /></td>
                            <td><NoteLink noteId={NoteId.F} /></td>
                            <td><NoteLink noteId={NoteId.G} /></td>
                            <td><NoteLink noteId={NoteId.A} /></td>
                            <td><NoteLink noteId={NoteId.B} /></td>
                        </tr>
                        <tr>
                            <td><NoteLink noteId={NoteId.Cb} /></td>
                            <td><NoteLink noteId={NoteId.Db} /></td>
                            <td><NoteLink noteId={NoteId.Eb} /></td>
                            <td><NoteLink noteId={NoteId.Fb} /></td>
                            <td><NoteLink noteId={NoteId.Gb} /></td>
                            <td><NoteLink noteId={NoteId.Ab} /></td>
                            <td><NoteLink noteId={NoteId.Bb} /></td>
                        </tr>
                    </tbody>
                </table>
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
