import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { NOTE_PRESETS } from "../../../../core/models/Pod/Note/Note.constants";
import { useRootParam } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledRoot = styled.div`
   ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
    }
`;

const RootCard: React.FC<any> = () => {

    const pageProps = usePageProps();

    useRootParam()

    return (
        <Card title="Root">
            <StyledRoot>
                <ul>
                    {NOTE_PRESETS.map(note => {
                        return (
                            <li key={note.id}>
                                <Link to={`${pageProps.path}?root=${note.id}`}>{note.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
