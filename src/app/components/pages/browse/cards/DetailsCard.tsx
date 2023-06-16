import React from "react";
import styled from "styled-components";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import { IIntervalPreset, IntervalId, INTERVAL_PRESET_MAP } from "../../../../../core/Interval.constants";
import { getName } from "../../../../../core/Interval.utils";
import { INotePreset } from "../../../../../core/Note.constants";
import { StyledCard } from "../../../shared/ui/Card";
import RootInput from "../../../shared/inputs/RootInput";

const StyledDetailsCard = styled(StyledCard) <{ $n: number }>`
    ul {
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
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

    return (
        <StyledDetailsCard $n={intervalIds.length}>
            <ul>
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
