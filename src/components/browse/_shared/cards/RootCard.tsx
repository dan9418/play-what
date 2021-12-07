import { Link } from "gatsby";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { StringParam, useQueryParam } from 'use-query-params';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { NOTE_PRESETS } from "../../../../core/models/Pod/Note/Note.constants";
import { rootState } from "../../../../state/state";
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

    const [root, setRoot] = useRecoilState(rootState);

    const [rootParam, setRootParam] = useQueryParam("root", StringParam);

    const note = NOTE_PRESETS.find(p => p.id.toLowerCase() === rootParam.toLowerCase());
    if (!note) throw new Error('Invalid root param');

    useEffect(() => {
        if (!rootParam) return;

        setRoot(note.value as any);
    }, [rootParam]);

    console.log('dpb rootParam', rootParam, root, pageProps);

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
