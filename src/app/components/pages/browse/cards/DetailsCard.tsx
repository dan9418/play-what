import React from "react";
import styled from "styled-components";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import { IIntervalPreset, INTERVAL_PRESET_MAP, IntervalId } from "../../../../../core/Interval.constants";
import { getName } from "../../../../../core/Interval.utils";
import { INotePreset, NOTE_PRESET_MAP, NoteId } from "../../../../../core/Note.constants";
import { getName as getNoteName } from "../../../../../core/Note.utils";
import { addPods } from "../../../../../core/Pod.utils";
import RootInput from "../../../shared/inputs/RootInput";
import { StyledCard } from "../../../shared/ui/Card";

const StyledDetailsCard = styled(StyledCard) <{ $n: number }>`
    ul {
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .notes {
        font-size: 150%;
    }
    .intervals {
        font-size: 120%;
    }
`;

interface IDetailsCardProps {
    podListPreset: AnyPodListPreset;
    rootNotePreset?: INotePreset;
}

const DetailsCard: React.FC<IDetailsCardProps> = ({
    podListPreset,
    rootNotePreset,
}) => {
    console.log('dpb', podListPreset, rootNotePreset);

    const intervalIds = podListPreset.valueIds;

    const noteNames = !rootNotePreset
        ? undefined
        : podListPreset.pods.map(pod => {
            return getNoteName(addPods(rootNotePreset.pod, pod))
        })

    return (
        <StyledDetailsCard $n={intervalIds.length}>
            <ul className="notes">
                {noteNames && noteNames.map(n => {
                    //const preset = NOTE_PRESET_MAP.get(noteId as NoteId) as INotePreset;
                    return (
                        <li key={n}>{n}</li>
                    );
                })}
            </ul>
            <ul className="intervals">
                {intervalIds.map(ivlId => {
                    const preset = INTERVAL_PRESET_MAP.get(ivlId as IntervalId) as IIntervalPreset;
                    return (
                        <li key={ivlId}>{getName(preset.pod)}</li>
                    );
                })}
            </ul>

            <RootInput />
        </StyledDetailsCard>
    );
};

export default DetailsCard;
