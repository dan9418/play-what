import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { NOTE_PRESETS } from "../../../../core/models/Pod/Note/Note.constants";
import PodUtils from "../../../../core/models/Pod/Pod.utils";
import { intervalsState, rootState } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledNotes = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const NotesCard: React.FC<any> = () => {

    const [root, setRoot] = useRecoilState(rootState);
    const [intervals, setIntervals] = useRecoilState(intervalsState);

    if (!intervals || !root) return null;

    const notes = PodUtils.addPodList(root.value, intervals.value);

    return (
        <Card title="Notes">
            <StyledNotes>
                <ul>
                    {notes.map(note => {
                        const preset = NOTE_PRESETS.find(p => PodUtils.areEqual(p.value, PodUtils.reduce(note)));
                        if (!preset) return null;
                        return (
                            <li key={preset.id}>
                                <Link to={`/browse/notes/${preset.id}`}>{preset.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledNotes>
        </Card>
    );
};

export default NotesCard;
