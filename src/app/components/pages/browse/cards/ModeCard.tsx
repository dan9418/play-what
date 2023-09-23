import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { PresetType, Tag } from "../../../../../core/Core.constants";
import { IPodPreset } from "../../../../../core/Pod.constants";
import { IPodListPreset } from "../../../../../core/PodList.constants";
import { getModelRoute } from "../../../../../core/Routing.utils";
import { SCALE_PRESETS } from "../../../../../core/Scale.constants";
import Card from "../../../shared/ui/Card";

const StyledModeCard = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    gap: 4px;
    flex-wrap: wrap;
    a {
      padding: 4px;
      &.active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;

interface IModeCardProps {
  podListPreset: IPodListPreset<any>;
  rootNotePreset?: IPodPreset<any>;
}

const ModeCard: React.FC<IModeCardProps> = ({
  podListPreset,
  rootNotePreset,
}) => {
  const rootId = rootNotePreset ? rootNotePreset.presetId : undefined;

  const type = podListPreset.tags.find(
    (t) =>
      t === Tag.Diatonic ||
      t === Tag.Pentatonic ||
      t === Tag.MelodicMode ||
      t === Tag.HarmonicMode
  );

  if (!type) return null;

  let modeType = "";
  switch (type) {
    case Tag.Diatonic:
      modeType = "Diatonic";
      break;
    case Tag.Pentatonic:
      modeType = "Pentatonic";
      break;
    case Tag.MelodicMode:
      modeType = "Melodic Minor";
      break;
    case Tag.HarmonicMode:
      modeType = "Harmonic Minor";
      break;
  }

  const modes = SCALE_PRESETS.filter((p) => p.tags.includes(type));

  return (
    <Card title={`${modeType} Modes`}>
      <StyledModeCard>
        <ul>
          {modes.map((n) => (
            <li key={n.presetId}>
              <Link
                to={getModelRoute(PresetType.Scale, n.presetId, rootId)}
                className={
                  podListPreset.presetId === n.presetId ? "active" : ""
                }
              >
                {n.name}
              </Link>
            </li>
          ))}
        </ul>
      </StyledModeCard>
    </Card>
  );
};

export default ModeCard;
