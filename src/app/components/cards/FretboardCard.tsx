import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { IChordPreset } from "../../core/models/Chord.constants";
import { AnyPodListPreset } from "../../core/models/Model.derived";
import { INotePreset } from "../../core/models/Note.constants";
import { IScalePreset } from "../../core/models/Scale.constants";
import Fretboard from "../fretboard/Fretboard";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

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

  const qp = new URLSearchParams({
    presetId: podListPreset.presetId,
    modelType: podListPreset.modelType,
    rootId: rootNotePreset.presetId,
  });

  return (
    <Card
      title="Fretboard"
      action={
        <Link className="customize" to={`/view/fretboard?${qp.toString()}`}>
          Customize <Icon iconId="next" size={8} />
        </Link>
      }
    >
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
