import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { NOTE_PRESETS } from "../../../../core/models/Note.constants";
import ModelUtils from "../../../../core/models/Model.utils";
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

    const notes = ModelUtils.addPodList(root.value, intervals.value);

    return (
        <Card title="Notes">
            <StyledNotes>
                <ul>
                    {notes.map(note => {
                        const preset = NOTE_PRESETS.find(p => ModelUtils.areEqual(p.value, ModelUtils.reduce(note)));
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
