import React from "react";
import styled from "styled-components";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import { INotePreset } from "../../../../../core/Note.constants";
import Fretboard from "../../../shared/fretboard/Fretboard";
import Card from "../../../shared/ui/Card";

const StyledFretboardCard = styled.div`
  .customize {
    display: flex;
    align-items: center;
  }
`;

interface IFretboardCardProps {
  podListPreset: AnyPodListPreset;
  rootNotePreset?: INotePreset;
}

const FretboardCard: React.FC<IFretboardCardProps> = ({
  podListPreset,
  rootNotePreset,
}) => {
  if (!podListPreset || !rootNotePreset) return null;

  // const qp = new URLSearchParams({
  //   presetId: podListPreset.presetId,
  //   modelType: podListPreset.modelType,
  //   rootId: rootNotePreset.presetId,
  // });
  // const link = `/view/fretboard?${qp.toString()}`;

  return (
    <Card title="Fretboard"    >
      <StyledFretboardCard>
        <Fretboard
          podListPreset={podListPreset}
          rootNotePreset={rootNotePreset}
        />
      </StyledFretboardCard>
    </Card>
  );
};

export default FretboardCard;
