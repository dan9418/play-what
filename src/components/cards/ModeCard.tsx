import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootId } from "../../contexts/PagePropsContext";
import { Tag } from "../../core/models/Model.constants";
import { IPodPreset } from "../../core/models/Pod.presets";
import { IPodListPreset } from "../../core/models/PodList.presets";
import { SCALE_PRESETS } from "../../core/models/Scale.presets";
import { getModelRoute } from "../../core/routing/Routing.utils";
import Card from "../ui/Card";

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
  modelConfig: IPodListPreset<any>;
  rootModelConfig?: IPodPreset<any>;
}

const ModeCard: React.FC<IModeCardProps> = ({
  modelConfig,
  rootModelConfig,
}) => {
  const rootId = useRootId();

  const type = modelConfig.tags.find(
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
                to={getModelRoute(n.presetType, n.presetId, rootId)}
                className={modelConfig.presetId === n.presetId ? "active" : ""}
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
