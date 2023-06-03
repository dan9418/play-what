import React from "react";
import styled from "styled-components";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import { INotePreset } from "../../../../../core/Note.constants";
import { StyledCard } from "../../../shared/ui/Card";

const StyledDetailsCard = styled(StyledCard) <{ $n: number }>`
  
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

    return (
        <StyledDetailsCard $n={1}>
            details
        </StyledDetailsCard>
    );
};

export default DetailsCard;
