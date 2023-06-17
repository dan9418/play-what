import React from "react";
import styled from "styled-components";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import { IIntervalPreset, INTERVAL_PRESET_MAP, IntervalId } from "../../../../../core/Interval.constants";
import { getName as getIntervalName, getRatio } from "../../../../../core/Interval.utils";
import { INotePreset } from "../../../../../core/Note.constants";
import { getFrequency, getName as getNoteName } from "../../../../../core/Note.utils";
import { addPods } from "../../../../../core/Pod.utils";
import RootInput from "../../../shared/inputs/RootInput";
import { StyledCard } from "../../../shared/ui/Card";

const StyledDetailsCard = styled(StyledCard) <{ $n: number }>`
    ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        >:first-child {
            font-weight: bold;
            font-size: 150%;
        }
        >:nth-child(2) {
            font-weight: semibold;
            font-size: 120%;
        }
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
    const hasRoot = !!rootNotePreset;
    const intervalIds = podListPreset.valueIds;

    return (
        <StyledDetailsCard $n={intervalIds.length}>
            <ul className="intervals">
                {intervalIds.map(ivlId => {
                    const intervalPreset = INTERVAL_PRESET_MAP.get(ivlId as IntervalId) as IIntervalPreset;
                    const intervalPod = intervalPreset.pod;
                    const intervalName = getIntervalName(intervalPod)
                    const notePod = rootNotePreset && addPods(rootNotePreset.pod, intervalPreset.pod);
                    const noteName = notePod && getNoteName(notePod);
                    const ratio = getRatio(intervalPod);
                    const freq = notePod && getFrequency(notePod);
                    return (
                        <li key={intervalName}>
                            {noteName && <div className="note">{noteName}</div>}
                            <div className="interval">{intervalName}</div>
                            {freq && <div className="freq">{freq} Hz</div>}
                            <div className="ratio">{ratio}</div>
                        </li>
                    );
                })}
            </ul>
            <RootInput />
        </StyledDetailsCard>
    );
};

export default DetailsCard;
